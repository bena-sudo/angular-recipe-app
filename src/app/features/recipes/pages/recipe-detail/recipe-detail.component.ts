/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe';
import { RecipeService } from '../../service/recipes.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
    this.recipeService
      .getRecipeById(this.recipeID)
      .pipe(
        catchError((error) => {
          console.error('Error when loading recipe:', error);
          return of(null);
        }),
      )
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
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
