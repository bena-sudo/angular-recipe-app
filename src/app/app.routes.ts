import { Routes } from '@angular/router';
import { HomeComponent } from './features/recipes/pages/home/home.component';
import { MainComponent } from './features/recipes/pages/main/main.component';
import { RecipesDetailComponent } from './features/recipes/pages/recipes-detail/recipes-detail.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    {path: 'recipe/:id', component: RecipesDetailComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
