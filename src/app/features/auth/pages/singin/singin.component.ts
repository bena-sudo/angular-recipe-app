import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterLoginComponent } from '../../components/footer-login/footer-login.component';
import { HeaderLoginComponent } from '../../components/header-login/header-login.component';

@Component({
  selector: 'app-singin',
  imports: [
    CommonModule,
    FormsModule,
    HeaderLoginComponent,
    FooterLoginComponent,
  ],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css',
})
export class SinginComponent {}
