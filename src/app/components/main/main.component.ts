import { Component } from '@angular/core';
import { RecipesListComponent } from '../../recipes/recipes-list/recipes-list.component';
import { RecipesTableComponent } from "../../recipes/recipes-table/recipes-table.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [RecipesListComponent, RecipesTableComponent, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
