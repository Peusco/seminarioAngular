import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ShirtDataService } from '../shirt-data.service';
import { Shirt } from './Shirt';

@Component({
  selector: 'app-app-shirts-list',
  templateUrl: './app-shirts-list.component.html',
  styleUrls: ['./app-shirts-list.component.scss']
})
export class AppShirtsListComponent implements OnInit {

 shirts : Shirt[] = [];

  constructor(private cart: CartService, private shirtData : ShirtDataService) {
  }

  ngOnInit(): void {
    this.shirtData.getAll().subscribe(shirt => this.shirts = shirt);
  }

  addToCart(shirt: Shirt): void {
    if (shirt.quantity != 0) {
      this.cart.addToCart(shirt);
      shirt.stock -= shirt.quantity;
      shirt.quantity = 0;
    }
  }

}

