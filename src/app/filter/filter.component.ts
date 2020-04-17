import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 public  min=0;
  public max=500;
  public twoWayRange=[0,800];
  step = 5
  public subscriber: Subscription;
  public items = null;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.subscriber = this._userService.itemsArray$.subscribe(data => {
      this.items = data ? data : null
    })
    if(!this.items) {
      this.items = this._userService.getItems();
    }
  }
  rangeChanged(e) {
    this.min = e[0];
    this.max = e[1];
  }
  filter() {
    this.items = this.items.filter(item => {
       return (item.discountedPrice >= this.min && item.discountedPrice <=this.max )
    })
    this._userService.publishItems(this.items);
  }
}
