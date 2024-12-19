import { Component, Input } from '@angular/core';
import { IRecipe } from '../../interface/i-recipe';

@Component({
  selector: '[app-recipes-table-rows]',
  imports: [],
  templateUrl: './recipes-table-rows.component.html',
  styleUrl: './recipes-table-rows.component.css'
})
export class RecipesTableRowsComponent {
  @Input({ required: true }) recipe?: IRecipe;
}
