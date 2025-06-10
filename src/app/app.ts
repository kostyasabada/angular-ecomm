import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductList } from "./pages/products-list/product-list";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'angular-ecomm';
}
