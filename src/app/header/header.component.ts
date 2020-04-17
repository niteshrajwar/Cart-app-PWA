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
  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
  }
  logOut() {
  }

}
