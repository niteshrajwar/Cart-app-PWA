import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 public items = [];
 formChangesSubscription: any;
  @ViewChild('searchForm', { static: true }) ngForm: NgForm;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(form => {
      this.onSubmit(form);
    })
  }
 onSubmit(e) {
   this.items = this._userService.getItems();
  const searchValue = e.search;
  if(searchValue && searchValue !== '') {
    this.items= this.items.filter(item => {
      return item.name === searchValue
    })
  this._userService.publishItems(this.items);
  } else {
    this._userService.publishItems(this.items);
  }
 }
}
