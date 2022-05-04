import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../admin/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  onDeleteUser = new Subject<User>();
  getUsersData() {
    return this.http.get('https://62660a4b63e0f382567baa72.mockapi.io/users', {
      observe: 'body',
      responseType: 'json',
    });
  }
  postUsersData(data: User) {
    return this.http.post(
      'https://62660a4b63e0f382567baa72.mockapi.io/users',
      data
    );
  }
  putUser(id: number | undefined, data: Object) {
    return this.http.put(
      `https://62660a4b63e0f382567baa72.mockapi.io/users/${id}`,
      data
    );
  }
  deleteUser(id: number | undefined) {
    return this.http
      .delete(`https://62660a4b63e0f382567baa72.mockapi.io/users/${id}`)
      .subscribe((data: User) => this.onDeleteUser.next(data));
  }
}
