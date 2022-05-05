import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  userData: User = new User();
  isEditingUser: boolean = false;
  phoneValidator = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  dateValidator =
    new Date().getFullYear().toString() +
    '-0' +
    (new Date().getMonth() + 1).toString() +
    '-' +
    new Date().getDate().toString();
  twitterLinkValidator =
    /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
  facebookLinkValidator =
    /http(?:s)?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_]+)/;
  linkedinLinkValidator =
    /http(?:s)?:\/\/(?:www\.)?linkedin\.com\/([a-zA-Z0-9_]+)/;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userData.email = '';
    if (history.state[1]) {
      this.isEditingUser = true;
      this.userData = history.state[0];
    }
  }

  addUser(form: NgForm) {
    if (form.valid) {
      this.userService.postUsersData(this.userData).subscribe((data) => {console.log('added')});
      form.resetForm();
    }
  }
  editUser(form: NgForm) {
    if (form.valid) {
      this.userService
        .putUser(this.userData.id, this.userData)
        .subscribe((data) => {});
        form.resetForm();
    }
  }
}
