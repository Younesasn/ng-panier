import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: '', component: CartComponent},
    {path: '**', redirectTo: ''}
];
