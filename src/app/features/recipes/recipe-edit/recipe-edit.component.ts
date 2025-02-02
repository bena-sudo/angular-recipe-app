import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Recipe } from '../../../core/models/recipe';
import { RecipeService } from '../../../core/services/recipes.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RecipeButtonDeleteComponent } from '../recipe-button-delete/recipe-button-delete.component';

@Component({
  selector: 'app-recipe-edit',
  imports: [RouterLink, ReactiveFormsModule, RecipeButtonDeleteComponent],
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  @Input('id') recipeID!: string;
  recipe?: Recipe | null = null;
  recipeForm: FormGroup;
  isLoading = true;

  constructor(
    private readonly fb: FormBuilder,
    private readonly recipeService: RecipeService,
    private readonly router: Router,
  ) {
    this.recipeForm = this.fb.group({
      strMeal: ['', [Validators.required]],
      strCategory: ['', [Validators.required]],
      strArea: [''],
      strInstructions: ['', [Validators.required]],
      strMealThumb: [''],
      strTags: [''],
      strYoutube: [''],
    });
  }

  ngOnInit(): void {
    if (this.recipeID) {
      this.loadRecipe();
    } else {
      console.error('No recipe ID provided!');
    }
  }

  private loadRecipe(): void {
    this.recipeService
      .getRecipeById(this.recipeID)
      .pipe(
        catchError((error) => {
          console.error('Error fetching recipe:', error);
          this.router.navigate(['/not-found']);
          return of(null);
        }),
      )
      .subscribe((recipe) => {
        this.recipe = recipe;
        if (recipe) {
          this.recipeForm.patchValue(recipe);
        } else {
          console.error('Recipe not found!');
        }
        this.isLoading = false;
      });
  }

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      return;
    }

    const updatedRecipe: Recipe = {
      ...this.recipeForm.value,
      dateModified: this.getFormattedDate(),
    };

    this.recipeService
      .updateRecipe(this.recipeID, updatedRecipe)
      .pipe(
        catchError((error) => {
          console.error('Error updating recipe:', error);
          return of(null);
        }),
      )
      .subscribe((result) => {
        if (result) {
          this.router.navigate(['/recipes']);
        } else {
          console.error('Failed to update recipe.');
        }
      });
  }

  private getFormattedDate(): string {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
