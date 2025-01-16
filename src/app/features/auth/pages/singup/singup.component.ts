import { Component } from '@angular/core';
import { HeaderLoginComponent } from '../../components/header-login/header-login.component';
import { FooterLoginComponent } from '../../components/footer-login/footer-login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singup',
  imports: [
    CommonModule,
    FormsModule,
    HeaderLoginComponent,
    FooterLoginComponent,
  ],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {}
