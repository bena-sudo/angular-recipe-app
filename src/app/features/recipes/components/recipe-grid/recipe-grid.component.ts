import { Component } from '@angular/core';
import { Recipe } from '../../../../core/models/recipe';
import { SupabaseService } from '../../../../core/services/supabase.service';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-grid',
  imports: [RecipeCardComponent],
  templateUrl: './recipe-grid.component.html',
  styleUrl: './recipe-grid.component.css',
})
export class RecipeGridComponent {
  public recipes: Recipe[] = [];

  constructor(private readonly supabaseService: SupabaseService) {}

  ngOnInit(): void {
    this.supabaseService.getDataObservable('recipe').subscribe({
      next: (recipes) => (this.recipes = recipes),
      error: (err) => console.error(err),
      complete: () => console.log('Complete.'),
    });
  }
}
