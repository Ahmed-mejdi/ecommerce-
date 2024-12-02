import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-oubliee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './oubliee.component.html',
  styleUrls: ['./oubliee.component.scss']
})
export class OublieeComponent {
  forgotPasswordForm: FormGroup;
  message: string | null = null; // Stocke le message
  isSuccess: boolean = false;    // Détermine si c'est un succès ou une erreur

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.forgotPasswordForm.get('email')!;
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.message = 'Email envoyé avec succès !';
      this.isSuccess = true;
      this.forgotPasswordForm.reset(); 
    } else {
      this.message = 'Veuillez entrer une adresse email valide.';
      this.isSuccess = false;
    }
  }
}
