import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from '../../../core/models/recipe';
import { RecipeService } from '../../../core/services/recipes.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-create',
  imports: [ReactiveFormsModule],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.css',
})
export class RecipeCreateComponent {
  recipe: Recipe = {
    idMeal: null,
    strMeal: null,
    strDrinkAlternate: null,
    strCategory: null,
    strArea: null,
    strInstructions: null,
    strMealThumb: null,
    strTags: null,
    strYoutube: null,
    strIngredient1: null,
    strIngredient2: null,
    strIngredient3: null,
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strIngredient16: null,
    strIngredient17: null,
    strIngredient18: null,
    strIngredient19: null,
    strIngredient20: null,
    strMeasure1: null,
    strMeasure2: null,
    strMeasure3: null,
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strMeasure16: null,
    strMeasure17: null,
    strMeasure18: null,
    strMeasure19: null,
    strMeasure20: null,
    strSource: null,
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
    strStorageimg: null,
    idCategory: null,
    idIngredients: [],
  };
  recipeForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly recipeService: RecipeService,
    private readonly router: Router,
  ) {
    this.recipeForm = this.fb.group({
      strMeal: ['', [Validators.required]],
      strCategory: ['', [Validators.required]],
      strInstructions: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      return;
    }

    const newRecipe: Recipe = this.recipeForm.value;

    this.recipeService
      .createRecipe(newRecipe)
      .pipe(
        catchError((error) => {
          console.error('Error creating recipe:', error);
          return of(null);
        }),
      )
      .subscribe((result) => {
        if (result) {
          console.log('Recipe created successfully:', result);
          this.router.navigate(['/recipes']);
        }
      });
  }
}
