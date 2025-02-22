import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../core/services/supabase.service';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
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
          this.router.navigate(['/']);
        }
      })
      .catch((error) => {
        this.isLoading = false;
        this.errorMessage = error.message;
      });
  }
}
