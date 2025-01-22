import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SupabaseService } from '../../../core/services/supabase.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  logged: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly supabaseService: SupabaseService,
  ) {}

  ngOnInit(): void {
    this.logged = this.supabaseService.loggedSubject.getValue();
    this.supabaseService.loggedSubject.subscribe(
      (logged) => (this.logged = logged),
    );
    this.supabaseService.isLogged();
  }

  async onLogout(): Promise<void> {
    try {
      await this.supabaseService.signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
}
