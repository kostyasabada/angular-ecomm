import { Component, signal } from '@angular/core';
import { PrimaryButton } from "../primary-button/primary-button";

@Component({
  selector: 'app-header',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center">
      <span class="text=xl">{{title()}}</span>
      <app-primary-button
        [label]="cart()"
        (btnClicked)="showButtonClicked()"
        />
    </div>
  `,
  styles: `
  `
})
export class Header {
  cart = signal("Cart");
  title = signal<string>('My store');

  showButtonClicked() {
    console.log('clicked');
    
  }
}
