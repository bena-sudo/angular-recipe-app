import { Component, OnInit } from '@angular/core';
import { RecipeGridComponent } from '../recipe-grid/recipe-grid.component';
import { SubHeaderComponent } from '../../../shared/components/sub-header/sub-header.component';
import { Recipe } from '../../../core/models/recipe';
import { RecipeService } from '../../../core/services/recipes.service';

@Component({
  selector: 'app-recipe-main',
  imports: [RecipeGridComponent, SubHeaderComponent],
  templateUrl: './recipe-main.component.html',
  styleUrl: './recipe-main.component.css',
})
export class RecipeMainComponent implements OnInit {
  recipes: Recipe[] = [];
  isLoading: boolean = false;

  constructor(private readonly recipeService: RecipeService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching all recipes:', err);
        this.isLoading = false;
      },
    });
  }

  onSearch(term: string): void {
    this.isLoading = true;
    this.recipeService.searchRecipes(term).subscribe({
      next: (recipes) => {
        this.recipes = recipes;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching recipes:', err);
        this.isLoading = false;
      },
    });
  }
}
