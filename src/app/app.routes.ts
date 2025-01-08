import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { RecipesTableComponent } from './recipes/recipes-table/recipes-table.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'main', component: MainComponent},
    {path: 'list', component: RecipesListComponent},
    {path: 'table', component: RecipesTableComponent},
    {path: 'recipe/:id', component: RecipesDetailComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
