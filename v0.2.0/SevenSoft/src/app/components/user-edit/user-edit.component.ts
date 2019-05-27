import { Component, OnInit, HostBinding } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  public user: User = {
    userId: 0,
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  };


  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.userService.getUser(params.id).subscribe(
      res => {
        this.user = res;
        console.log(this.user)
      }
    )
  }


  atualizarUsuario() {
    console.log(this.user)
    const params = this.activatedRoute.snapshot.params;
    //console.log(this.user)
    this.userService.updateUser(params.id, this.user).subscribe(
      res => {
        //console.log(res);
        this.router.navigate(['/user']);
      },
      err => console.error(err)
    )
  }
}
