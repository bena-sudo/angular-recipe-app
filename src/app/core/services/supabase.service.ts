import { Injectable } from '@angular/core';
import {
  AuthSession,
  createClient,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
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

  loggedSubject = new BehaviorSubject(false);
  async isLogged() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();
    if (user) {
      this.loggedSubject.next(true);
    } else this.loggedSubject.next(false);
  }
}
