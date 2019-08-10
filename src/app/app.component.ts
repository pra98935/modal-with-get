import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { User } from './models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todaydate;
  getData;

  public allUsers: User;

  constructor(private _userService: UserService) {}
  ngOnInit() { 
    //this.todaydate = this._userService.showTodayDate();
    //this.getData = this._userService.getUser(); 
    //console.log(this.todaydate);
    //console.log(this.getData);

    this._userService.getUser().subscribe((data: any) => {
      //console.log(data);
      this.allUsers = data; 
      console.log('this.allUsers');
      console.log(this.allUsers);
    })

  } 
  title = 'modal-get';
}
