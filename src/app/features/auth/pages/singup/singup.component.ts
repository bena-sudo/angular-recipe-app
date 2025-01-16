import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-singup',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderAuthComponent,
    FooterAuthComponent,
  ],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css',
})
export class SingupComponent {
  signUpForm!: FormGroup;
  isLoading = false;
  errorMessage: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly supabaseService: SupabaseService,
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;
    const { email, password } = this.signUpForm.value;

    this.supabaseService
      .signUp(email, password)
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
