import { Component, Input } from '@angular/core';
import { Recipe } from '../../../core/models/recipe';
import { RouterLink } from '@angular/router';

/**
 * RecipeCardComponent
 *
 * Represents an individual recipe card.
 * Displays recipe details and includes navigation functionality.
 */
@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  /**
   * Recipe data to display in the card.
   * Provided by the parent component via property binding.
   *
   * @type {Recipe | undefined}
   */
  @Input({ required: true }) recipe?: Recipe;
}
