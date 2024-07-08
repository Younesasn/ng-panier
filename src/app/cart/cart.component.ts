import { Component, OnInit, signal } from '@angular/core';
import { Fruit } from '../shared/entities';
import { CommonModule } from '@angular/common';
import { fruits } from '../shared/fruits.mock';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  fruits: Fruit[] = fruits;
  cartFruits: Fruit[] = [];

  plus(fruit: Fruit) {
    fruit.quantite++;
  }

  moins(fruit: Fruit) {
    if (fruit.quantite > 0) {
      fruit.quantite--;
    }
  }

  push(fruit: Fruit) {
    if (fruit.quantite > 0) {
      if (this.cartFruits.find((f) => f.nom === fruit.nom)) {
        this.cartFruits = this.cartFruits.map((f) => {
          if (f.nom === fruit.nom) {
            f.quantite++;
          }
          return f;
        });
      } else {
        this.cartFruits.push(fruit);
      }
    }
  }

  somme(fruit: Fruit) {
    return fruit.quantite * fruit.prixHT * 1.2;
  }

  total() {
    return (
      this.cartFruits.reduce(
        (acc, fruit) => acc + fruit.quantite * fruit.prixHT,
        0
      ) * 1.2
    );
  }
}
