import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() userData: User = new User();
  hiddenEmail: string | undefined;
  hiddenPhone: string | undefined;
  constructor() {}
  ngOnInit(): void {
    const { email,phone } = this.userData;
    this.hiddenEmail = email && censorEmail(email);
    this.hiddenPhone = phone && censorPhone(phone)
    function censorPhone(str: string){
      return str[0] + '*'.repeat(str.length - 2) + str.slice(-1);
    }
    function censorWord(str: string, index: number) {
      return str[0] + '*'.repeat(str.length - 2) + str.slice(index);
    }
    function censorEmail(email: string) {
      const emailSplitted = email.split('@');
      return (
        censorWord(emailSplitted[0], -1) +
        '@' +
        censorWord(
          emailSplitted[1],
          emailSplitted[1].indexOf('.') - emailSplitted[1].length
        )
      );
    }
  }
}
