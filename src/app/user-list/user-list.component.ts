import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  usersData: any
  searchText:string = ''
  userStatus:string = 'true'
  maxItemsPerPage:number = 6
  page:number = 1
  sortBy:string = "fullname"
  order:boolean | "asc" | "desc" = "asc"

  constructor(private usersService: UserService) {}
  ngOnInit(): void {
    this.usersService
      .getUsersData()
      .subscribe((datas) => {this.usersData = datas});
  }
}
