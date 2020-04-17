import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';
import { Options, LabelType } from 'ng5-slider';

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
  minValue: number = 0;
  maxValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number): string => {
      return '₹' + value;
    }
  };
  constructor(private _userService:UserService) { }

  ngOnInit() {
  }
  filter() {
    this.items = this._userService.getItems();
    this.items = this.items.filter(item => {
       return (item.discountedPrice >= this.minValue && item.discountedPrice <=this.maxValue )
    })
    this._userService.publishItems(this.items);
  }
}
