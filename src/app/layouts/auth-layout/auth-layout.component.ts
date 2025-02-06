import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterAuthComponent } from '../../shared/components/footer-auth/footer-auth.component';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet, FooterAuthComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
