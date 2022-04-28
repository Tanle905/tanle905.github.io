import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getUsersData() {
    return this.http.get('https://62660a4b63e0f382567baa72.mockapi.io/users', {
      observe: 'body',
      responseType: 'json',
    });
  }
  postUsersData() {
    return this.http.post(
      'https://62660a4b63e0f382567baa72.mockapi.io/users',
      {
        firstname: 'Laurel',
        email: 'Xzavier21@hotmail.com',
        phone: '553-555-9551 x268',
        DOB: '2021-12-24T17:46:23.889Z',
        lastname: 'Swift',
        status: false,
        id: '1',
      },
      { responseType: 'json' }
    );
  }
}
