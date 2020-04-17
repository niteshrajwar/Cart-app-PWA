import { Injectable } from '@angular/core';

import { HttpClient, HttpClientJsonpModule, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
// import  'rxjs/add/operator/map';
import { HttpModule } from '@angular/http';
import { User } from './user.model';
import { Http } from '@angular/http';
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
  constructor(private http: HttpClient, private _router: Router) {
  }
  public getItems = () => {
    return this.Items;
  }
  public publishItems(cartItems :any) {
   this.itemsArray.next(cartItems);
  }
}