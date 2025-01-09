import { Component, Input, OnInit } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../../shared/components/header/header.component";

@Component({
  selector: 'app-recipes-detail',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './recipes-detail.component.html',
  styleUrl: './recipes-detail.component.css',
})
export class RecipesDetailComponent implements OnInit {
  @Input('id') recipeID?: string;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
