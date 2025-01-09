import { Component, Input } from '@angular/core';
import { IRecipe } from '../../../../core/models/i-recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes-card',
  imports: [RouterLink],
  templateUrl: './recipes-card.component.html',
  styleUrl: './recipes-card.component.css',
})
export class RecipesCardComponent {
  @Input({ required: true }) recipe?: IRecipe;
}
