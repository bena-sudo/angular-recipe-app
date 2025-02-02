import { Component, Input } from '@angular/core';
import { RecipeService } from '../../../core/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-button-delete',
  templateUrl: './recipe-button-delete.component.html',
  styleUrls: ['./recipe-button-delete.component.css'],
})
export class RecipeButtonDeleteComponent {
  @Input('recipeID') recipeID!: string;

  constructor(
    private readonly recipeService: RecipeService,
    private readonly router: Router,
  ) {}

  onDelete(): void {
    if (!this.recipeID) {
      console.error('No recipe ID provided!');
      return;
    }

    this.recipeService.deleteRecipe(this.recipeID).subscribe({
      next: () => {
        console.log('Recipe deleted successfully');
        this.router.navigate(['/recipes']);
      },
      error: (err) => console.error('Error deleting recipe:', err),
      complete: () => console.log('Delete operation complete'),
    });
  }
}
