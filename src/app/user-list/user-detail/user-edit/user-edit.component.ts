import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() userData:User = new User()

  constructor(private userService:UserService) { }
  userDelete(){
    this.userService.deleteUser(this.userData.id)
  }
  userStatusHandle(){
    this.userService.putUser(this.userData.id, {status:!this.userData.status}).subscribe(data=>console.log(data))
  }
  ngOnInit(): void {
  }

}
