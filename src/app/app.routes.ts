import { Routes } from '@angular/router';
import { RecipeHomeComponent } from './features/recipes/pages/recipe-home/recipe-home.component';
import { RecipeMainComponent } from './features/recipes/pages/recipe-main/recipe-main.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RecipeDetailComponent } from './features/recipes/pages/recipe-detail/recipe-detail.component';
import { AboutMainComponent } from './shared/pages/about-main/about-main.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'home', component: RecipeHomeComponent },
  { path: 'main', component: RecipeMainComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutMainComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
