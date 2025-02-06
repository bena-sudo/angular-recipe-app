import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  language: 'en' | 'es' = 'en'; // Default language set to English

  // Method to switch language
  setLanguage(event: Event) {
    const lang = (event.target as HTMLSelectElement).value;
    this.language = lang === 'en' || lang === 'es' ? lang : 'es';
  }
}
