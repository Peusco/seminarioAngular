import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shirt } from './app-shirts-list/Shirt';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  private _cartList : Shirt[] = []
  cartList : BehaviorSubject<Shirt[]> = new BehaviorSubject(this._cartList);

  addToCart(shirt: Shirt) {
    let item   = this._cartList.find((v1) => v1.name == shirt.name) 
    console.log(item)

    if(!item){
      this._cartList.push({... shirt});
    }else{
      item.quantity += shirt.quantity;
    }

    this.cartList.next(this._cartList);
  }

}
