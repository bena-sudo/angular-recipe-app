import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../core/services/supabase.service';
import { Recipe } from '../../../core/models/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly table: string = 'recipe';

  constructor(private readonly supabase: SupabaseService) {}

  async getRecipes(): Promise<Recipe[]> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data || [];
  }

  async getRecipeById(id: string): Promise<Recipe | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .select('*')
      .eq('idMeal', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async createRecipe(recipe: Recipe): Promise<Recipe | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .insert([recipe])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async updateRecipe(
    id: string,
    updates: Partial<Recipe>,
  ): Promise<Recipe | null> {
    const { data, error } = await this.supabase.client
      .from(this.table)
      .update(updates)
      .eq('idMeal', id)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async deleteRecipe(id: string): Promise<boolean> {
    const { error } = await this.supabase.client
      .from(this.table)
      .delete()
      .eq('idMeal', id);

    if (error) {
      throw new Error(error.message);
    }

    return true;
  }
}
