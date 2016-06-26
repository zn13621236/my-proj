/**
 * Created by nanzhao on 6/12/16.
 */

import {Injectable} from '@angular/core';

@Injectable()
export class UserListService {

  private _users:User[];
  public getUsers = () => {
    return this._users
  };

  constructor() {
    this._users = [
      {
        userName: 'zn136',
        passWord: 'asdfkj',
        displayName: 'nan zhao',
        birthDate: new Date(),
      }, {
        userName: 'zn136asdf',
        passWord: 'asdfkj',
        displayName: 'nan zhao',
        gender: 'male',
        birthDate: new Date(),
      }
    ];
  }

}

export interface User{
  userName: string;
  passWord: string;
  displayName: string;
  gender: string;
  birthDate: Date;
}
