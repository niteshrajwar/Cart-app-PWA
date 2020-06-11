import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public items = [];
  public subscriber: Subscription;
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.items = this._userService.getItems();
    this.subscriber = this._userService.itemsArray$.subscribe(data => {
      this.items = data ? data : [];
    })
  }
  cartAddition(itemDetails:any) {
    console.log(itemDetails)
     if (typeof window !== 'undefined' && localStorage) {
        const cart = localStorage.getItem('Cart') ? JSON.parse(localStorage.getItem("Cart")) : [];
        if(cart.length > 0) {

         const find =  cart.findIndex(a => {
             return (a.id === itemDetails.id)   } 
         )
   if (find !== -1) {
      cart[find].quantity += 1;
   } else {
     itemDetails.quantity = 1;
     cart.push(itemDetails);
  }
  }else {
    itemDetails.quantity = 1;
     cart.push(itemDetails);
  }
  this._userService.publishCartAddition(cart);
  localStorage.setItem("Cart", JSON.stringify(cart));
    } 
  }
}
