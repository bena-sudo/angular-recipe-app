import { Component, Input } from '@angular/core';
import { IRecipe } from '../../interface/i-recipe';

@Component({
  selector: 'app-recipes-card',
  imports: [],
  templateUrl: './recipes-card.component.html',
  styleUrl: './recipes-card.component.css',
})
export class RecipesCardComponent {
  @Input({ required: true }) recipe?: IRecipe;
}
