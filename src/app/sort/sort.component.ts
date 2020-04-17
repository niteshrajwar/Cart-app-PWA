import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  public items = null;
  public id = null;
  public subscriber : Subscription;
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.subscriber = this._userService.itemsArray$.subscribe(data => {
      this.items = data ? data: null;
    })
    if (!this.items) this.items = this._userService.getItems();
  }
  sort(method: number) {
    this.id = method;
    if (method === 1) {
      this.items.sort((a,b) => {
      return b.discountedPrice - a.discountedPrice;
      }
    )}
    if (method === 2) {
      this.items.sort((a,b) => {
      return a.discountedPrice - b.discountedPrice;
      }
    )}
    if (method === 3) {
      this.items.sort((a,b) => {
      return b.discountPercentage - a.discountPercentage;
      }
    )}
    this._userService.publishItems(this.items);
  }
}
