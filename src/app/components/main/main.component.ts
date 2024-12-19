import { Component } from '@angular/core';
import { RecipesListComponent } from '../../recipes/recipes-list/recipes-list.component';
import { RecipesTableComponent } from "../../recipes/recipes-table/recipes-table.component";

@Component({
  selector: 'app-main',
  imports: [RecipesListComponent, RecipesTableComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
