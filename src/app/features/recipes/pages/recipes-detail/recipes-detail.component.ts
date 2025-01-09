import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  imports: [],
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css',
})
export class RecipesDetailComponent {
  @Input('id') recipeID?: string;
}
