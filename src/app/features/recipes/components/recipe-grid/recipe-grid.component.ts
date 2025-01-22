import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe';
import { RecipeService } from '../../service/recipes.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
export class RecipeGridComponent implements OnInit {
  /**
   * List of recipes to be displayed in the grid.
   */
  public recipes: Recipe[] = [];
  public isLoading: boolean = true;
  public errorMessage: string | null = null;

  /**
   * Service for interacting with the recipes database.
   * Injected via the constructor.
   */
  constructor(private readonly recipeService: RecipeService) {}

  /**
   * Fetches recipe data from the database and updates the `recipes` array.
   * Logs any errors that occur during the data retrieval process.
   */
  ngOnInit(): void {
    this.loadRecipes();
  }

  /**
   * Loads the recipes using the RecipeService.
   * Handles loading state and error messages.
   */
  private loadRecipes(): void {
    this.recipeService
      .getRecipes()
      .pipe(
        catchError((error) => {
          console.error('Error fetching recipes:', error);
          this.errorMessage = 'Failed to load recipes. Please try again later.';
          this.isLoading = false;
          return of([]);
        }),
      )
      .subscribe((recipes) => {
        this.recipes = recipes;
        this.isLoading = false;
      });
  }
}
