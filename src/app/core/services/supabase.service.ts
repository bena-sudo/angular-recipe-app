import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private readonly supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

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
