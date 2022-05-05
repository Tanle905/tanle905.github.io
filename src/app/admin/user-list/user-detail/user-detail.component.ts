import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  @Input() userData: User = new User();
  hiddenEmail: string | undefined;
  isHiddenEmail: boolean = true;
  hiddenPhone: string | undefined;
  isHiddenPhone: boolean = true;
  DOB: string | undefined;
  constructor() {}
  ngOnInit(): void {
    const { email } = this.userData;
    this.hiddenEmail = email && censorEmail(email);
    this.DOB = this.userData.dob?.toString().slice(
      0,
      this.userData.dob?.toString().indexOf('T')
    );

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
