/**
 * Created by nanzhao on 7/2/16.
 */
import {Component, Output}  from '@angular/core';
import {User, UserListService} from './user.list.service';
@Component({
  selector: 'user-add',
  templateUrl: 'app/user/user.add.html',
  //styleUrls: ['app/style/user.detail.component.css'],
  //directives: [MyHighlightDirective],
})

export class UserAddComponent {
  public user:User;

  constructor(private _userListService:UserListService) {
    this.user = {};
  }

  public addUser(user:User) {
    this._userListService.addOrUpdateUser(user);
  }


}
