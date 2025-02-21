import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../core/models/recipe';
import { Router, RouterLink } from '@angular/router';
import { SupabaseService } from '../../../core/services/supabase.service';

/**
 * RecipeCardComponent
 *
 * Represents an individual recipe card.
 * Displays recipe details and includes navigation functionality.
 */
@Component({
  selector: 'app-recipe-card',
  imports: [RouterLink],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent implements OnInit {
  /**
   * Recipe data to display in the card.
   * Provided by the parent component via property binding.
   *
   * @type {Recipe | undefined}
   */
  @Input({ required: true }) recipe?: Recipe;

  logged: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly supabaseService: SupabaseService,
  ) {}

  ngOnInit(): void {
    this.logged = this.supabaseService.loggedSubject.getValue();
    this.supabaseService.loggedSubject.subscribe(
      (logged) => (this.logged = logged),
    );
    this.supabaseService.isLogged();
  }
}
