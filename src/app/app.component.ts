import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private router: Router) {}

  /**
   * Navigue vers une route spécifiée
   * @param route Chemin de navigation
   */
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  /**
   * Change dynamiquement le thème (clair/sombre)
   * @param theme Nom du thème
   */
  changeTheme(theme: 'light' | 'dark'): void {
    document.body.className = ''; // Réinitialise les classes
    document.body.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme');
  }
}
