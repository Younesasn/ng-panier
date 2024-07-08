import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
    console.log(fruits);
  }

  // plus() {
  //   if (this.quantity() < 5) {
  //     this.quantity.set(this.quantity() + 1);
  //   }
  // }

  // moins() {
  //   if (this.quantity() > 1) {
  //     this.quantity.set(this.quantity() - 1);
  //   }
  // }
}
