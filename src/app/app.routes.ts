import { EnvironmentInjector, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { CreeComponent } from './connexion/cree/cree.component';
import { OublieeComponent } from './connexion/oubliee/oubliee.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
export const routes: Routes = [
  
  { path: 'accueil', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'produit', component:ProduitComponent},
  { path: 'cart', component:CartComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'cree', component: CreeComponent },
  { path: 'oublié', component: OublieeComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule,BrowserModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
