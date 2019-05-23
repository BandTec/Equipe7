import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  user: User = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  cadastrarNovoUsuario() {
    delete this.user.userId;
    this.userService.saveUser(this.user).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    )
  }
}
