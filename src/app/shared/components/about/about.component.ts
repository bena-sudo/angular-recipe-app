import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-about',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  language: 'en' | 'es' = 'es';

  setLanguage(lang: string) {
    this.language = (lang === 'en' || lang === 'es') ? lang : 'es';
  }
}
