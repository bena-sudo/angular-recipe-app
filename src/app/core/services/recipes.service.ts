import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { Recipe } from '../models/recipe';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly table: string = 'recipe';

  constructor(private readonly supabase: SupabaseService) {}

  getRecipes(): Observable<Recipe[]> {
    return from(this.supabase.client.from(this.table).select('*')).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.data || [];
      }),
      catchError((error) => throwError(() => error)),
    );
  }

  getRecipeById(id: string): Observable<Recipe | null> {
    return from(
      this.supabase.client
        .from(this.table)
        .select('*')
        .eq('idMeal', id)
        .single(),
    ).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.data;
      }),
      catchError((error) => throwError(() => error)),
    );
  }

  createRecipe(recipe: Recipe): Observable<Recipe | null> {
    return from(
      this.supabase.client.from(this.table).insert([recipe]).select().single(),
    ).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.data;
      }),
      catchError((error) => throwError(() => error)),
    );
  }

  updateRecipe(
    id: string,
    updates: Partial<Recipe>,
  ): Observable<Recipe | null> {
    return from(
      this.supabase.client
        .from(this.table)
        .update(updates)
        .eq('idMeal', id)
        .select()
        .single(),
    ).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.data;
      }),
      catchError((error) => throwError(() => error)),
    );
  }

  deleteRecipe(id: string): Observable<boolean> {
    return from(
      this.supabase.client.from(this.table).delete().eq('idMeal', id),
    ).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return true;
      }),
      catchError((error) => throwError(() => error)),
    );
  }

  searchRecipes(query: string): Observable<Recipe[]> {
    return from(
      this.supabase.client
        .from(this.table)
        .select('*')
        .ilike('strMeal', `%${query}%`),
    ).pipe(
      map((response) => {
        if (response.error) {
          throw new Error(response.error.message);
        }
        return response.data || [];
      }),
      catchError((error) => throwError(() => error)),
    );
  }
}
