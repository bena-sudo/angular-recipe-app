import { Injectable } from '@angular/core';
import {
  AuthChangeEvent,
  AuthSession,
  createClient,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private readonly supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey,
    );
  }

  get client() {
    return this.supabase;
  }

  get session() {
    this.supabase.auth.getSession().then(({ data }) => {
      this._session = data.session;
    });
    return this._session;
  }

  authChanges(
    callback: (event: AuthChangeEvent, session: Session | null) => void,
  ) {
    return this.supabase.auth.onAuthStateChange(callback);
  }

  signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  }

  signUp(email: string, password: string) {
    return this.supabase.auth.signUp({
      email: email,
      password: password,
    });
  }

  signOut() {
    return this.supabase.auth.signOut();
  }

  profile(user: User) {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single();
  }

  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path);
  }

  // MIRAR
  async getData(tabla: string) {
    const { data, error } = await this.supabase.from(tabla).select('*');
    if (error) {
      console.error('Error fetching data: ', error);
    }
    return data;
  }

  getDataObservable(table: string): Observable<any> {
    return from(this.getData(table));
  }
}
