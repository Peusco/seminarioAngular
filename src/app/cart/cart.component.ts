import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Shirt } from '../app-shirts-list/Shirt';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Shirt[]>;
  constructor(private cart : CartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
