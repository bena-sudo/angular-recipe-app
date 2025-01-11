import { Component } from '@angular/core';

@Component({
  selector: 'app-about-main',
  imports: [],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.css'
})
export class AboutMainComponent {
  language: 'en' | 'es' = 'en';

  setLanguage(lang: 'en' | 'es') {
    this.language = lang;
  }
}
