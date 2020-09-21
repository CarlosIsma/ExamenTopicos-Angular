import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from '../../models/user';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  constructor(private userService: UserService) { }
  user = {} as User;
  ngOnInit(): void {
  }

  addUser() {
    if(this.user.name !== '' && this.user.email != '' && this.user.uid != '') {
      this.userService.addUser(this.user);
      this.user = {} as User;
      console.log(this.user)
    }
  }

}
