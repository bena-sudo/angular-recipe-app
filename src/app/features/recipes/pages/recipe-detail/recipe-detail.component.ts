import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe';
import { RecipeService } from '../../service/recipes.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
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

  getIngredients(): { name: string; quantity: string }[] {
    if (!this.recipe) return [];
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = (this.recipe as any)[`strIngredient${i}`];
      const measure = (this.recipe as any)[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ name: ingredient, quantity: measure || '' });
      }
    }
    return ingredients;
  }

  getInstructionParagraphs(): string[] {
    if (!this.recipe?.strInstructions) return [];
    return this.recipe.strInstructions
      .split(/(?:\n)+/)
      .filter((instruction) => instruction.trim());
  }
}
