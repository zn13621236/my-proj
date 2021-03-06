/**
 * Created by nanzhao on 6/12/16.
 */

import {Component,onInit} from '@angular/core';
import {User, UserListService} from  './user.list.service';
import {UserDetailComponent} from './user.detail.component';
import {UserAddComponent} from './user.add.component';

@Component({
  selector: 'user-list',
  templateUrl: 'app/user/user.list.html',
  styleUrls: ['app/style/user.list.component.css'],
  directives: [UserDetailComponent, UserAddComponent],
})
export class UserListComponent implements onInit {

  public users = [];
  public selectedUser:User;

  constructor(private _userListService:UserListService) {
    //  this.users = this._userListService.getUsers();
  }

  ngOnInit() {
    this.users = this._userListService.getUsers();
  }

  public select(user:User) {
    this.selectedUser = user;
  }

  public clear(){
    this.selectedUser = null;
  }
}
