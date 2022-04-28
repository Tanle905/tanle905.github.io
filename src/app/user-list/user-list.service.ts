import { Injectable } from '@angular/core';
import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  public userDetail = new EventEmitter()
  constructor() { }
}
