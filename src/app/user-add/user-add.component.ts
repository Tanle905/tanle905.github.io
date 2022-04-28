import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { User } from '../user-list/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  userData: User = new User();

  addUser(form: NgForm) {
    this.userService
      .postUsersData(this.userData)
      .subscribe((data) => console.log(data));
    this.userData = new User();
  }
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.userService.postUsersData()
  }
}
