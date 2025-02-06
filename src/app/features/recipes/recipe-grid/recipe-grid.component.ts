import { Component, Input } from '@angular/core';
import { Recipe } from '../../../core/models/recipe';
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
  @Input() recipes: Recipe[] = [];
}
