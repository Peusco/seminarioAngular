import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Shirt } from './app-shirts-list/Shirt';

const URL = 'https://6353e6dfccce2f8c02fee8f8.mockapi.io/shirt';

@Injectable({
  providedIn: 'root'
})
export class ShirtDataService {

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Shirt[]>{
    return this.http.get<Shirt[]>(URL).pipe(tap((shirts : Shirt[]) => shirts.forEach(shirt => shirt.quantity = 0) ))
  }
}
