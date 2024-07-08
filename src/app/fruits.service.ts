import { Injectable } from '@angular/core';
import { Fruit } from './shared/entities';
import { fruits } from './shared/fruits.mock';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  fruits: Fruit[] = fruits;

  getFruits(): Fruit[] {
    return this.fruits;
  }
}
