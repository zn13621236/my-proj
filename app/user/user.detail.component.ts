/**
 * Created by nanzhao on 6/12/16.
 */
import {Component, Input}  from '@angular/core';
import {User} from './user.list.service';
import { MyHighlightDirective } from '../directive/myHighlight';
@Component({
  selector: 'user-detail',
  templateUrl: 'app/user/user.detail.html',
  directives: [MyHighlightDirective],
})
export class UserDetailComponent {
  @Input() active_user:User;

}
