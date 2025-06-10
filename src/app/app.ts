import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductList } from "./pages/products-list/product-list";

@Component({
  selector: 'app-root',
  imports: [Header, ProductList],
  template: `
    <app-header />
    <app-product-list />
  `,
  styles: [],
})
export class App {
  protected title = 'angular-ecomm';
}
