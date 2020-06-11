import { Injectable } from '@angular/core';

import { HttpClient, HttpClientJsonpModule, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// import  'rxjs/add/operator/map';
import { User } from './user.model';
import { Subject } from 'rxjs/Subject';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { items } from './cart.js';
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
@Injectable()
export class UserService {
  private Items = items;
  private userList = new Subject<User[]>();
  private itemsArray = new BehaviorSubject<[]>(items);
  public itemsArray$ = this.itemsArray.asObservable();
  private cartItemsArray = new BehaviorSubject<[]>(null);
  public cartItemsArray$ = this.cartItemsArray.asObservable();
  constructor(private http: HttpClient, private _router: Router) {
  }
  public getItems = () => {
    this.discountCalculation();
    return this.Items;
  }
  public publishItems(items :any) {
   this.itemsArray.next(items);
  }
  discountCalculation() {
    this.Items.map(item => {
      item.discountedPrice = item.price - item.discount;
      item.discountPercentage = item.discount/item.price *100;
    })
   }
   public publishCartAddition(cartItems) {
     this.cartItemsArray.next(cartItems);
   }
}