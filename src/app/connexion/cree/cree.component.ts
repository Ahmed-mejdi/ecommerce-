import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cree',
  standalone: true,
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule here
  ],
  templateUrl: './cree.component.html',
  styleUrls: ['./cree.component.scss']
})
export class CreeComponent {
  onSubmit() {
    console.log("Formulaire soumis avec succès !");
  }
}
