import { Component } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe';
import { SupabaseService } from '../../../../core/services/supabase.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

/**
 * RecipeGridComponent
 *
 * Displays a grid of recipes retrieved from the database.
 * Uses RecipeCardComponent to render individual recipe cards.
 */
@Component({
  selector: 'app-recipe-grid',
  imports: [RecipeCardComponent],
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css',
})
export class RecipeGridComponent {
  /**
   * List of recipes to be displayed in the grid.
   */
  public recipes: Recipe[] = [];

  /**
   * Service for interacting with the Supabase database.
   * Injected via the constructor.
   */
  constructor(private readonly supabaseService: SupabaseService) {}

  /**
   * Fetches recipe data from the database and updates the `recipes` array.
   * Logs any errors that occur during the data retrieval process.
   */
  ngOnInit(): void {
    this.supabaseService.getDataObservable('recipe').subscribe({
      next: (recipes) => (this.recipes = recipes),
      error: (err) => console.error(err),
      complete: () => console.log('Complete.'),
    });
  }
}
