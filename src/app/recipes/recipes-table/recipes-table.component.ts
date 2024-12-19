import { Component } from '@angular/core';
import { IRecipe } from '../../interface/i-recipe';
import { LISTRECIPES } from '../recipes-list/recipes-list.example';

@Component({
  selector: 'app-recipes-table',
  imports: [],
  templateUrl: './recipes-table.component.html',
  styleUrl: './recipes-table.component.css'
})
export class RecipesTableComponent {
  public listRecipes: IRecipe[] = [];
  ngOnInit(): void {
    this.listRecipes = LISTRECIPES;
  }
}
