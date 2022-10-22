import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Shirt } from '../app-shirts-list/Shirt';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.scss']
})
export class InputIntComponent implements OnInit {

  constructor() { 
    this.quantity  = 0
    this.max = 0;
  }

  @Input()
  quantity: number;

  @Input()
  max : number;

  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter;

  ngOnInit(): void {
  }

  upQuantity() :void {
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
 }

 downQuantity(): void{
  if(this.quantity > 0){
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
 }
}
