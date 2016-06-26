/**
 * Created by nanzhao on 6/26/16.
 */
import {Component, Input}  from '@angular/core';
import {User} from './user.list.service';

@Component({
  selector: 'user-detail',
  templateUrl: 'app/user/user.detail.html',
})
export class UserDetailComponent {
  @Input() active_user:User;

}
