import { Routes } from '@angular/router';
import { RecipeHomeComponent } from './features/recipes/pages/recipe-home/recipe-home.component';
import { RecipeMainComponent } from './features/recipes/pages/recipe-main/recipe-main.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RecipeDetailComponent } from './features/recipes/pages/recipe-detail/recipe-detail.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { RecipeCreateComponent } from './features/recipes/pages/recipe-create/recipe-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RecipeHomeComponent },
  { path: 'main', component: RecipeMainComponent },
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'create', component: RecipeCreateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];
