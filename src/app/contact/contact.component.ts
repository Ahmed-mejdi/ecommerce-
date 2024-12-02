import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule // Ajouter FormsModule ici, même si cela est déjà importé dans app.module.ts
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact: Contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.contact.name && this.contact.email && this.contact.subject && this.contact.message) {
      // Logique pour traiter le formulaire
      console.log('Formulaire soumis:', this.contact);
      
      // Vous pouvez ajouter ici la logique pour envoyer les données à un serveur via un service Angular.
      
      // Réinitialiser le formulaire après soumission
      this.contact = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      console.log('Formulaire incomplet');
    }
  }
}
