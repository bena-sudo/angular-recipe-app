import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Recipe } from '../../../../core/models/recipe';
import { RecipeService } from '../../service/recipes.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-recipe-edit',
  imports: [RouterLink, ReactiveFormsModule, HeaderComponent, FooterComponent],
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
    private readonly router: Router
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

  private async loadRecipe(): Promise<void> {
    try {
      const recipe = await this.recipeService.getRecipeById(this.recipeID);
      this.recipe = recipe;
      if (recipe) {
        this.recipeForm.patchValue(recipe);
      } else {
        console.error('Recipe not found!');
        this.router.navigate(['/not-found']);
      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
      this.router.navigate(['/not-found']);
    } finally {
      this.isLoading = false;
    }
  }

  async onSubmit(): Promise<void> {
    if (this.recipeForm.invalid) {
      return;
    }

    const updatedRecipe: Recipe = {
      ...this.recipeForm.value,
      dateModified: this.getFormattedDate(),
    };

    try {
      await this.recipeService.updateRecipe(this.recipeID, updatedRecipe);
      this.router.navigate(['/main']);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  }

  private getFormattedDate(): string {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
