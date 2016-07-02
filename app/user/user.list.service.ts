/**
 * Created by nanzhao on 6/12/16.
 */

import {Injectable} from '@angular/core';
import {_} from 'node_modules/lodash';

@Injectable()
export class UserListService {

  private _users:User[];
  public getUsers = () => {
    return this._users
  };

  public findUser = (user:User)=> {
    for (let usr of this._users) {
      if (usr.userName === user.userName) {
        return usr;
      }
    }
    return null;
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

  public updateUser(user:User, userToUpdate:User) {
    userToUpdate.userName = user.userName ? user.userName : userToUpdate.userName;
    userToUpdate.passWord = user.passWord ? user.passWord : userToUpdate.passWord;
    userToUpdate.displayName = user.displayName ? user.displayName : userToUpdate.displayName;
    userToUpdate.gender = user.gender ? user.gender : userToUpdate.gender;
    userToUpdate.birthDate = user.birthDate ? user.birthDate : userToUpdate.birthDate;
  }

  public addOrUpdateUser(user:User) {
    let existedUser = this.findUser(user);
    if (existedUser) {
      this.updateUser(user, existedUser);
    } else {
      this._users.push(user);
    }
  }
}

export interface User {
  userName: string;
  passWord: string;
  displayName: string;
  gender: string;
  birthDate: Date;
}
