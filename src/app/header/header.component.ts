import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public subscriber: Subscription;
  public userInfo = null;
  public cartItemCount = 0;
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    if (typeof window !== 'undefined' && localStorage && localStorage.getItem("Cart")) {
       let cartItems = JSON.parse(localStorage.getItem("Cart"));
      this.cartItemCount = cartItems ? cartItems.length : 0;
    }
    this.subscriber = this._userService.cartItemsArray$.subscribe(data => {
      this.cartItemCount = data ? data.length : this.cartItemCount;
    })
  }

}
