import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addItems(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  getShippingCharges() {
    return this.http.get<
      {
        type: string;
        price: number;
      }[]
    >('/assets/shipping.json');
  }
}
