import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {User} from '../user.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import {InMemoryDataService} from '../in-memory-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public items = [];
  public subscriber: Subscription;
     constructor(
    private _userService: UserService
  ) {}

  ngOnInit() {
  }
}