import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HeaderAuthComponent } from '../../components/header-auth/header-auth.component';
import { FooterAuthComponent } from '../../components/footer-auth/footer-auth.component';
import { SupabaseService } from '../../../../core/services/supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderAuthComponent,
    FooterAuthComponent,
  ],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css',
})
export class SinginComponent {
  signInForm!: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly supabaseService: SupabaseService,
  ) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.signInForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    const { email, password } = this.signInForm.value;

    this.supabaseService
      .signIn(email, password)
      .then((response) => {
        this.isLoading = false;

        if (response.error) {
          this.errorMessage = response.error.message;
        } else {
          this.router.navigate(['/home']);
        }
      })
      .catch((error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
      });
  }
}
