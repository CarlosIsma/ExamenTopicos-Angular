import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  editing: boolean = false;
  editingUser: User;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
  
    }); 
  }

  deleteUser(event, user) {
    this.userService.deleteUser(user);
  }

  editUser(event, user) {
    this.editing = !this.editing;
    this.editingUser = user;
  }

  updateUser() {
    this.userService.updateUser(this.editingUser);
    this.editingUser = {} as User;
    this.editing = false;
  }

}
