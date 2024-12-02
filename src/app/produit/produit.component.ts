import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';



export const routes: Routes = [
  { path: 'cart', component: CartComponent },
];
interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive,RouterModule,RouterOutlet],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})

export class ProduitComponent {
  
  categories: Category[] = [
    {
      name: 'Smartphones',
      products: [
        {
          name: 'iPhone 14',
          price: 2999,
          imageUrl: 'https://www.istore.com.tn/6312-medium_default/iphone-14-pro-256-go-gold.jpg'
        },
        {
          name: 'Samsung Galaxy S22',
          price: 2500,
          imageUrl: 'https://static.wixstatic.com/media/00a778_952ba0ed0a274b098224cae36517ff02~mv2.jpeg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/00a778_952ba0ed0a274b098224cae36517ff02~mv2.jpeg'
        },
        {
          name: 'Google Pixel 6',
          price: 2200,
          imageUrl: 'https://i5.walmartimages.com/seo/Google-Pixel-6-128GB-GB7N6-Factory-Unlocked-8GB-RAM-Smartphone-Sorta-Seafoam_04252aa4-00b0-4844-b803-3eaeb0fc7fc3.be79d2ebfaa3a0278b612c0bb2de2056.jpeg'
        },
        {
          name: 'OnePlus 9',
          price: 1800,
          imageUrl: 'https://i5.walmartimages.com/seo/OnePlus-9-5G-128GB-ROM-8GB-RAM-LE2110-Dual-SIM-GSM-Unlocked-Blue_1d55fd33-02cc-4bdf-b7c0-be90297aa356.0124d968879a27d1dab8e1809247c26f.jpeg'
        },
        {
          name: 'Xiaomi Redmi Note 11',
          price: 800,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWgfqX7pNDFKm1Gz2rR3tqvLsq-d1rIbu_g&s'
        }
      ]
    },
    {
      name: 'Ordinateurs',
      products: [
        {
          name: 'MacBook Pro 16"',
          price: 5500,
          imageUrl: 'https://www.scoop.com.tn/img/cms/pc%20portable/apple/macbook%20pro%2014-16.jpg'
        },
        {
          name: 'Dell XPS 13',
          price: 3000,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIVUE7WQ9rg5dfF88qj6rIkzxlmyPRjFjGQ&s'
        },
        {
          name: 'HP Spectre x360',
          price: 2800,
          imageUrl: 'https://www.tunisianet.com.tn/297666-large/pc-portable-hp-spectre-x360-convertible-14-ef0003nk-tactile-i5-1235u-16-go.jpg'
        },
        {
          name: 'Lenovo ThinkPad X1 Carbon',
          price: 3500,
          imageUrl: 'https://www.tunisianet.com.tn/129221-large/pc-portable-lenovo-thinkpad-x1-carbon-i7-8e-gen-16-go-sim-orange-offerte-30-go.jpg'
        },
        {
          name: 'Asus ROG Strix',
          price: 4000,
          imageUrl: 'https://www.tunisianet.com.tn/132398-large/pc-portable-asus-rog-strix-gl503ge-i5-8e-gen-16-go-sim-orange-offerte-30-go.jpg'
        }
      ]
    },
    {
      name: 'Accessoires',
      products: [
        {
          name: 'Casque Sony WH-1000XM4',
          price: 1200,
          imageUrl: 'https://www.powerplanetonline.com/cdnassets/sony_wh-1000xm4_blanco_auriculares_inalambricos_001_l.jpg'
        },
        {
          name: 'Montre Apple Watch Series 8',
          price: 1500,
          imageUrl: 'https://spacenet.tn/204741-home_default/apple-watch-serie-9-gps-45mm-midnight.jpg'
        },
        {
          name: 'Enceinte Bluetooth JBL Charge 5',
          price: 500,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hEgj9FzqnWp2t_2ZF1wiR8oOLkDJZCvVAg&s'
        },
        {
          name: 'Chargeur sans fil Anker',
          price: 80,
          imageUrl: 'https://i5.walmartimages.com/seo/Anker-313-Wireless-Charger-Slim-Pad-10W-Qi-Certified-Charging-for-iPhone-12_6bbd00eb-b6e2-44a3-9b87-ea92411d8801.b0d5b4cbe8ac4c5df3fd667cc7fc946a.jpeg'
        },
        {
          name: 'Câble USB-C Aukey',
          price: 20,
          imageUrl: 'https://www.cdiscount.com/pdt2/2/4/7/1/700x700/auk0701979479247/rw/aukey-cable-usb-c-a-usb-a-3-0-2m-en-nylon-cable-us.jpg'
        }
      ]
    },
    {
      name: 'Télévisions',
      products: [
        {
          name: 'Samsung QLED 55"',
          price: 4500,
          imageUrl: 'https://www.cora.fr/cdn-cgi/image/width=600,quality=80,metadata=none,format=auto/media/produit/1706085479/R86/hxhxwrIWwrlrezlrwriZILiZILOqQB.jpg'
        },
        {
          name: 'LG OLED 65"',
          price: 6000,
          imageUrl: 'https://www.lg.com/tn/images/televiseurs/md07538718/gallery/medium02.jpg'
        },
        {
          name: 'Sony Bravia 75"',
          price: 7000,
          imageUrl: 'https://superfi.co.uk/cdn/shop/files/SonyBRAVIAKD75X85LU75inch4KUltraHDHDRSmartLEDTV_1.png?v=1698055418&width=1214'
        },
        {
          name: 'TCL 50" 4K',
          price: 2500,
          imageUrl: 'https://zoom.com.tn/64829-large_default/televiseur-tcl-50-50p635-4k-hdr-google-tv.jpg'
        },
        {
          name: 'Philips Ambilight 55"',
          price: 5000,
          imageUrl: 'https://images.philips.com/is/image/philipsconsumer/41cb041400524aa59ec1afbd00d149cc?$pnglarge$&wid=700&hei=700'
        }
      ]
    },
    {
      name: 'Gaming',
      products: [
        {
          name: 'PlayStation 5',
          price: 2500,
          imageUrl: 'https://skymil-informatique.com/42705-layout4_default/console-ps5-standard-chassis-d.jpg'
        },
        {
          name: 'Xbox Series X',
          price: 2000,
          imageUrl: 'https://i5.walmartimages.com/seo/Pre-Owned-Xbox-Series-X-Console-with-Accessories-Kit-Good_8ec318ab-fa0d-48f5-b360-28d8024f8b0a.54b83ca26515c9bec81bdcf6f1d784b4.jpeg'
        },
        {
          name: 'Nintendo Switch',
          price: 1000,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4t1Zfor_n1fHc1IzN6DKyvcCXD8-8aINKCA&s'
        },
        {
          name: 'Gaming PC MSI',
          price: 5000,
          imageUrl: 'https://skymil-informatique.com/39342-large_default/laptop-gamer-msi-13700hx.jpg'
        },
        {
          name: 'VR Oculus Quest 2',
          price: 1500,
          imageUrl: 'https://wiki.tn/wp-content/uploads/2024/10/61GhFJUXGL._AC_SX466_.jpg'
        }
      ]
    }
  ];

  defaultImageUrl: string = 'https://via.placeholder.com/150?text=Image+non+disponible';

  handleError(event: any) {
    event.target.src = this.defaultImageUrl;
  }
  addToCart(product: Product) {
    
    console.log(`${product.name} a été ajouté au panier.`);
    
  }
}
