import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { RecipeGridComponent } from "../../components/recipe-grid/recipe-grid.component";

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, FooterComponent, RecipeGridComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
