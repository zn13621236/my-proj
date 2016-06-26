import {Component} from '@angular/core';
import {UserListComponent} from './user/user.list.component';
import {UserDetailComponent} from './user/user.detail.component';

import {UserListService} from  './user/user.list.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/greeting.html',
    directives: [UserListComponent, UserDetailComponent],
    providers: [UserListService],
})
export class AppComponent {

}
