import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { RecipeGridComponent } from "../../components/recipe-grid/recipe-grid.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-recipe-main',
  imports: [HeaderComponent, RecipeGridComponent, FooterComponent],
  templateUrl: './recipe-main.component.html',
  styleUrl: './recipe-main.component.css'
})
export class RecipeMainComponent {

}
