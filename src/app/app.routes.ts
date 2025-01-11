import { Routes } from '@angular/router';
import { RecipeHomeComponent } from './features/recipes/pages/recipe-home/recipe-home.component';
import { RecipeMainComponent } from './features/recipes/pages/recipe-main/recipe-main.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RecipeDetailComponent } from './features/recipes/pages/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: 'home', component: RecipeHomeComponent },
  { path: 'main', component: RecipeMainComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
