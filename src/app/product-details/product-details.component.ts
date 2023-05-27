import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
  };

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('productId'));

    for (let prod of products) {
      if (prod.id === id) {
        this.product = prod;
        break;
      }
    }
  }

  addItemToCart(product: Product) {
    this.cartService.addItems(product);
    window.alert('Item added to cart successfully');
  }
}
