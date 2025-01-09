import { Routes } from '@angular/router';
import { RecipesDetailComponent } from './features/recipes/pages/recipes-detail/recipes-detail.component';
import { RecipeHomeComponent } from './features/recipes/pages/recipe-home/recipe-home.component';
import { RecipeMainComponent } from './features/recipes/pages/recipe-main/recipe-main.component';
import { LoginComponent } from './features/auth/pages/login/login.component';

export const routes: Routes = [
    {path: 'home', component: RecipeHomeComponent},
    {path: 'main', component: RecipeMainComponent},
    {path: 'recipe/:id', component: RecipesDetailComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
