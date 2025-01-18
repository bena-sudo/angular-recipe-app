import { Routes } from '@angular/router';
import { RecipeHomeComponent } from './features/recipes/pages/recipe-home/recipe-home.component';
import { RecipeMainComponent } from './features/recipes/pages/recipe-main/recipe-main.component';
import { RecipeDetailComponent } from './features/recipes/pages/recipe-detail/recipe-detail.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RecipeCreateComponent } from './features/recipes/pages/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './features/recipes/pages/recipe-edit/recipe-edit.component';
import { SigninComponent } from './features/auth/pages/signin/signin.component';
import { SignupComponent } from './features/auth/pages/signup/signup.component';

// Defining the routes for the application
export const routes: Routes = [
  // Redirect root path to 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { title: 'Home' } },

  // Route for the home page of the recipe section
  { path: 'home', component: RecipeHomeComponent, data: { title: 'Home' } },

  // Route for the main recipe listing page
  { path: 'main', component: RecipeMainComponent, data: { title: 'Recipes' } },

  // Dynamic route for recipe details, using 'id' as a parameter
  {
    path: 'recipe/:id',
    component: RecipeDetailComponent,
    data: { title: 'Detail' },
  },

  // Route for creating a new recipe
  {
    path: 'create',
    component: RecipeCreateComponent,
    data: { title: 'Create' },
  },

  // Dynamic route for editing a recipe, using 'id' as a parameter
  { path: 'edit/:id', component: RecipeEditComponent, data: { title: 'Edit' } },

  // Route for the login page (signin)
  { path: 'signin', component: SigninComponent, data: { title: 'Sign in' } },

  // Route for the registration page (signup)
  { path: 'signup', component: SignupComponent, data: { title: 'Sign up' } },

  // Route for the About page
  { path: 'about', component: AboutComponent, data: { title: 'About' } },

  // Catch-all route for undefined paths, showing the NotFound component
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 Not Found' },
  },
];
