import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-other-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './other-layout.component.html',
  styleUrl: './other-layout.component.css',
})
export class OtherLayoutComponent {}
