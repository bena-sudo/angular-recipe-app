import { Routes } from '@angular/router';
import { RecipeHomeComponent } from './features/recipes/pages/recipe-home/recipe-home.component';
import { RecipeMainComponent } from './features/recipes/pages/recipe-main/recipe-main.component';
import { RecipeDetailComponent } from './features/recipes/pages/recipe-detail/recipe-detail.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RecipeCreateComponent } from './features/recipes/pages/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './features/recipes/pages/recipe-edit/recipe-edit.component';
import { SinginComponent } from './features/auth/pages/singin/singin.component';
import { SingupComponent } from './features/auth/pages/singup/singup.component';

// Defining the routes for the application
export const routes: Routes = [
  // Redirect root path to 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Route for the home page of the recipe section
  { path: 'home', component: RecipeHomeComponent },

  // Route for the main recipe listing page
  { path: 'main', component: RecipeMainComponent },

  // Dynamic route for recipe details, using 'id' as a parameter
  { path: 'recipe/:id', component: RecipeDetailComponent },

  // Route for creating a new recipe
  { path: 'create', component: RecipeCreateComponent },

  // Dynamic route for editing a recipe, using 'id' as a parameter
  { path: 'edit/:id', component: RecipeEditComponent },

  // Route for the login page (signin)
  { path: 'singin', component: SinginComponent },

  // Route for the registration page (signup)
  { path: 'singup', component: SingupComponent },

  // Route for the About page
  { path: 'about', component: AboutComponent },

  // Catch-all route for undefined paths, showing the NotFound component
  { path: '**', component: NotFoundComponent },
];
