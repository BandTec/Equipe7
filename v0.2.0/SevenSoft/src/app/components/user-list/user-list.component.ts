import { Component, OnInit, HostBinding } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  user: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.usersService.getUsers().subscribe(
      res => {
        this.user = res;
      },
      err => console.error(err)
    );
  }

  deletarUsuario(userId: string) {
    this.usersService.deleteUser(userId).subscribe(
      res => {
        console.log(res)
        this.getUser();
      },
      err => console.log(err)
    )
  }
}
