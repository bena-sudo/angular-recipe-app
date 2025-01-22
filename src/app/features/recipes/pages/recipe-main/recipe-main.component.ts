import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { RecipeGridComponent } from '../../components/recipe-grid/recipe-grid.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { SubHeaderComponent } from '../../../../shared/components/sub-header/sub-header.component';

@Component({
  selector: 'app-recipe-main',
  imports: [
    HeaderComponent,
    RecipeGridComponent,
    FooterComponent,
    SubHeaderComponent,
  ],
  templateUrl: './recipe-main.component.html',
  styleUrl: './recipe-main.component.css',
})
export class RecipeMainComponent {}
