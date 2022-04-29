import { Injectable } from '@angular/core';
import { reject } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loginDetail:string[] = []
  loggedIn = false;
  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      if(this.loginDetail[0] === 'tanle905' && this.loginDetail[1] === '123456'){
        resolve(true)
      }
    });
    return promise
  }
}
