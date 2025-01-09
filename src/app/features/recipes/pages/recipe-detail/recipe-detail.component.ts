import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe';
import { RecipeService } from '../../service/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  @Input('id') recipeID!: string;

  recipe: Recipe | null = null;

  constructor(private readonly recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipeDetail(this.recipeID);
  }

  private async getRecipeDetail(id: string): Promise<void> {
    try {
      this.recipe = await this.recipeService.getRecipeById(this.recipeID);
    } catch (error) {
      console.error('Error when loading recipe:', error);
    }
  }
}