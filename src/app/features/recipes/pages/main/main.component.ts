import { Component } from '@angular/core';
import { RecipesListComponent } from '../../components/recipes-list/recipes-list.component';
import { HeaderComponent } from "../../../../shared/components/header/header.component";
import { FooterComponent } from "../../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [RecipesListComponent, HeaderComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
