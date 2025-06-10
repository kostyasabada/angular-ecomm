import { Component, inject, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";
import { CartService } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <button class="text=xl" routerLink="/">{{title()}}</button>
      <app-primary-button
        [label]="'Cart (' + cartService.cart().length + ')'"
        routerLink="/cart"
        />
    </div>
  `,
  styles: `
  `
})
export class Header {
  cartService = inject(CartService);
  // cart = signal("Cart");
  title = signal<string>('My store');

  showButtonClicked() {
    console.log('clicked');
    
  }


}
