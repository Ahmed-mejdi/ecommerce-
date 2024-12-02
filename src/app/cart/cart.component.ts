import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItem[] = [
    { id: 1, name: 'Enceinte Bluetooth JBL Charge 5', price: 500, quantity: 2, total: 1000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hEgj9FzqnWp2t_2ZF1wiR8oOLkDJZCvVAg&s' },
    { id: 2, name: 'LG OLED 65', price: 6000, quantity: 1, total: 6000, imageUrl: 'https://www.lg.com/tn/images/televiseurs/md07538718/gallery/medium02.jpg' },
    { id: 3, name: 'PlayStation 5', price:2500 , quantity: 1, total: 2500, imageUrl: 'https://skymil-informatique.com/42705-layout4_default/console-ps5-standard-chassis-d.jpg' }
  ];

  // Calcul du sous-total
  get subtotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.total, 0);
  }

  // Frais de livraison fixes
  get shippingFee(): number {
    return 8;
  }

  // Calcul du total final
  get total(): number {
    return this.subtotal + this.shippingFee;
  }

  // Mise à jour de la quantité et du total
  updateQuantity(item: CartItem, event: Event): void {
    const input = event.target as HTMLInputElement;
    const quantity = Number(input.value);
    if (quantity >= 1) { // Assurez-vous que la quantité est valide
      item.quantity = quantity;
      item.total = item.price * item.quantity;
    }
  }

  // Suppression d'un article du panier
  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  // Fonction de passage à la caisse
  checkout(): void {
    alert('Passage à la caisse...');
    // Logique pour passer à la caisse (e.g., rediriger ou ouvrir une page de paiement)
  }
}
