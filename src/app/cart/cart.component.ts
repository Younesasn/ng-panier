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
export class CartComponent implements OnInit {
  fruits: Fruit[] = fruits;
  cartFruits: Fruit[] = [];

  ngOnInit(): void {
    console.log(fruits);
  }

  plus(fruit: Fruit) {
    fruit.quantite++;
  }

  moins(fruit: Fruit) {
    if(fruit.quantite > 0) {
      fruit.quantite--;
    }
  }

  push(fruit: Fruit) {
    this.cartFruits.push(fruit);
  }
}
