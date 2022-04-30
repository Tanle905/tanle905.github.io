import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-failed-modal',
  templateUrl: './login-failed-modal.component.html',
  styleUrls: ['./login-failed-modal.component.css']
})
export class LoginFailedModalComponent implements OnInit {
  @Output() onCancel = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
