  import { Component, OnInit } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { RouterOutlet, Routes } from '@angular/router';
  import { RouterLink, RouterLinkActive } from '@angular/router';
  import { CreeComponent } from './cree/cree.component';
  import { OublieeComponent } from './oubliee/oubliee.component';
  @Component({
    selector: 'app-connexion',
    standalone: true,
    imports: [FormsModule, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, OublieeComponent, CreeComponent],
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.scss'],
  })
  export class ConnexionComponent implements OnInit {
    
    routes: Routes = [
      { path: 'cree', component: CreeComponent },
      { path: 'oublié', component: OublieeComponent },
    ];

    username: string = '';
    password: string = '';
    registerUsername: string = '';
    registerEmail: string = '';
    registerPassword: string = '';
    forgotEmail: string = '';

    isRegistering: boolean = false;
    isForgotPassword: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    onSubmit(): void {
      console.log('Nom d\'utilisateur:', this.username);
      console.log('Mot de passe:', this.password);
    }

    showRegister(): void {
      this.isRegistering = true;
      this.isForgotPassword = false;
    }

    showForgotPassword(): void {
      this.isForgotPassword = true;
      this.isRegistering = false;
    }

    onRegister(): void {
      console.log('Nom d\'utilisateur:', this.registerUsername);
      console.log('Email:', this.registerEmail);
      console.log('Mot de passe:', this.registerPassword);
    }

    onForgotPasswordSubmit(): void {
      console.log('Email pour réinitialisation:', this.forgotEmail);
    }

    cancel(): void {
      this.isRegistering = false;
      this.isForgotPassword = false;
    }
  }