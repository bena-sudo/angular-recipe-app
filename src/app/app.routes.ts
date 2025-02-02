import { Routes } from '@angular/router';
import { RecipeHomeComponent } from './features/recipes/recipe-home/recipe-home.component';
import { SigninComponent } from './features/auth/signin/signin.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RecipeMainComponent } from './features/recipes/recipe-main/recipe-main.component';
import { AboutComponent } from './shared/components/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { OtherLayoutComponent } from './layouts/other-layout/other-layout.component';
import { RecipeCreateComponent } from './features/recipes/recipe-create/recipe-create.component';
import { RecipeDetailComponent } from './features/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './features/recipes/recipe-edit/recipe-edit.component';
import { supabaseSinginGuard } from './core/guards/supabase-singin.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeLayoutComponent,
    children: [{ path: '', component: RecipeHomeComponent }],
  },
  {
    path: 'recipes',
    component: MainLayoutComponent,
    children: [{ path: '', component: RecipeMainComponent }],
  },
  {
    path: 'recipe',
    component: MainLayoutComponent,
    children: [{ path: ':id', component: RecipeDetailComponent }],
  },
  {
    path: 'about',
    component: OtherLayoutComponent,
    children: [{ path: '', component: AboutComponent }],
  },
  {
    path: 'admin',
    component: OtherLayoutComponent,
    children: [
      { path: 'create', component: RecipeCreateComponent },
      { path: 'edit/:id', component: RecipeEditComponent },
    ],
    canActivate: [supabaseSinginGuard],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: '404 Not Found' },
  },
];
