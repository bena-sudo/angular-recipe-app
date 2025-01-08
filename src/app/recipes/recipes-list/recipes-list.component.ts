import { Component, OnInit } from '@angular/core';
import { IRecipe } from '../../interface/i-recipe';
import { RecipesCardComponent } from '../recipes-card/recipes-card.component';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipesCardComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css',
})
export class RecipesListComponent implements OnInit {
  public listRecipes: IRecipe[] = [];
  
  constructor (private readonly supabaseService: SupabaseService){}

  ngOnInit(): void {
    this.listRecipes = this.supabaseService.getRecipes();
  }
}
