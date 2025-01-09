import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { RecipeGridComponent } from "../../components/recipe-grid/recipe-grid.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-recipe-home',
  imports: [HeaderComponent, RecipeGridComponent, FooterComponent],
  templateUrl: './recipe-home.component.html',
  styleUrl: './recipe-home.component.css'
})
export class RecipeHomeComponent {

}
