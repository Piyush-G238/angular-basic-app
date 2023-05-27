import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items = this.cartService.getItems();

  checkOutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit(): void {
    console.warn('your order has been submitted', this.checkOutForm.value);
    this.checkOutForm.reset();
  }
}
