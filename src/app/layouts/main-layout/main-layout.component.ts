import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { SubHeaderComponent } from '../../shared/components/sub-header/sub-header.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SubHeaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
