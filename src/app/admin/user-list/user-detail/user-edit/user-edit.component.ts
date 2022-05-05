import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  @Input() userData: User = new User();

  constructor(private userService: UserService, private route: Router) {}
  ngOnInit(): void {}

  userEditHandle() {
    this.route.navigate(['/admin/user-add'], { state: [this.userData, true] });
  }
  userDeleteHandle() {
    this.userService.deleteUser(this.userData.id);
  }
}
