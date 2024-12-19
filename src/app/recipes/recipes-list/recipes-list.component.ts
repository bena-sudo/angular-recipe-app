import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interface/i-recipe';
import { LISTRECIPES } from './recipes-list.example';
import { RecipesCardComponent } from '../recipes-card/recipes-card.component';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesCardComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
  public listRecipes: IRecipe[] = [];
  ngOnInit(): void {
    this.listRecipes = LISTRECIPES;
  }
}
