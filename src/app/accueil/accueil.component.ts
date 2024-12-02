import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
];

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
  ],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {
  // Liste des catégories
  categories = [
    {
      name: 'Ordinateurs de Bureau',
      image: 'https://www.cdiscount.com/pdt2/6/3/7/1/700x700/vib5056692104637/rw/vibox-vi-14-pc-gamer-22-ecran-pack-amd-ryzen.jpg',
      description:
        'Découvrez nos ordinateurs performants pour le bureau et le gaming.',
    },
    {
      name: 'Ordinateurs Portables',
      image: 'https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/p/c/pc-portable-hp-15-fd0097nk-i5-13e-gen-32g-512go-ssd-noir.jpg',
      description:
        'Légers et puissants pour vos besoins professionnels ou personnels.',
    },
    {
      name: 'Smartphones',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26ur_YleXYtkG68_HVnznfDXhH5D8zuqVWQ&s',
      description:
        'Les dernières innovations pour rester connecté au quotidien.',
    },
    {
      name: 'Accessoires',
      image: 'https://img.freepik.com/photos-gratuite/collection-technologie-homme-moderne-casque-bureau-bois-lunettes-soleil-smartphone-genere-par-ia_24640-92923.jpg?semt=ais_hybrid',
      description:
        'Des périphériques et accessoires pour optimiser votre expérience.',
    },
    {
      name: 'Téléviseurs',
      image: 'https://fnac-api-prod.dotit-corp.com/media/image/ef/a2/35b3530a833bc3b8cec5ae0b8525.jpg',
      description:
        'Découvrez nos écrans UHD pour une expérience visuelle exceptionnelle.',
    },
    {
      name: 'Gaming',
      image: 'https://spacenet.tn/img/cms/Accessoires%20Gamer.jpg',
      description: 'Tout l’équipement nécessaire pour les joueurs passionnés.',
    },
  ];

  // Liste des produits en vedette
  featuredProducts = [
    {
      name: 'PC Gaming RTX 3060',
      image: 'https://www.ultrapc.ma/43633-large_default/pc-gamer-ultrapc-core-i5-11400f-512gb-ssd-16gb-rtx3060-12gb.jpg',
      description: 'Une configuration puissante pour les gamers exigeants.',
      price: 2200,
    },
    {
      name: 'Casque Audio HyperX',
      image: 'https://skymil-informatique.com/40692-large_default/hyperx-cloud-iii-noirrouge.jpg',
      description:
        'Un son immersif et un confort optimal pour vos sessions de jeu.',
      price: 200,
    },
    {
      name: 'Télévision 4K LG',
      image: 'https://images.philips.com/is/image/PhilipsConsumer/43PUS7304_12-IMS-global?$jpglarge$',
      description:
        'Une qualité d’image époustouflante avec des couleurs éclatantes.',
      price: 799.99,
    },
    {
      name: 'Smartwatch Fitbit Versa 3',
      image: 'https://i5.walmartimages.com/seo/Fitbit-Versa-3-Health-Fitness-Smartwatch-Black-Black-Aluminum_7d8f001e-8da8-4e34-987c-506ed4b43f1d.7b668c393194189878038d5173c3fcc1.jpeg',
      description:
        'Une montre connectée pour suivre votre activité et rester en forme.',
      price: 229.99,
    },
    {
      name: 'Clavier Mécanique Logitech',
      image: 'https://spacenet.tn/227581-large_default/clavier-gamer-mecanique-logitech-g815-lightsync-rvb-noir.jpg',
      description:
        'Un clavier mécanique de haute qualité pour les gamers et les pros.',
      price: 129.99,
    },
    {
      name: 'Chaise Gaming DXRacer',
      image: 'https://m.media-amazon.com/images/I/712UqX-KrxL._AC_UF1000,1000_QL80_.jpg',
      description: 'Un confort inégalé pour vos longues sessions de jeu.',
      price: 500,
    },
  ];

  // Liste des promotions
  promotions = [
    {
      name: 'Pack Gaming Ultime',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsaxEh0lMQj9ZhuftLMXBTPmAaodzDvNdMsQ&s',
      discount: '20%',
      description: 'Obtenez tout le nécessaire pour débuter dans le gaming.',
    },
    {
      name: 'Smartphone Samsung S22',
      image: 'https://www.tunisianet.com.tn/239525-large/smartphone-samsung-galaxy-s22-5g-8-go-256-go-blanc.jpg',
      discount: '15%',
      description:
        'Le dernier modèle à prix réduit pour une durée limitée.',
    },
  ];

  searchQuery: string = '';
  filteredCategories = this.categories;
  filteredFeaturedProducts = this.featuredProducts;
  filteredPromotions = this.promotions;

  constructor() {}

  ngOnInit(): void {}

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCategories = this.categories.filter(
      (category) =>
        category.name.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query)
    );
    this.filteredFeaturedProducts = this.featuredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    this.filteredPromotions = this.promotions.filter(
      (promo) =>
        promo.name.toLowerCase().includes(query) ||
        promo.description.toLowerCase().includes(query)
    );
  }

  exploreProducts(): void {
    console.log('Exploration des produits en cours...');
  }

  addToCart(product: any): void {
    console.log(`${product.name} a été ajouté au panier.`);
  }

  viewPromotions(): void {
    console.log('Exploration des promotions spéciales.');
  }
}
