import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // public params = this.route.snapshot.params;

  // public user: User = {
  //   userId: 0,
  //   username: '',
  //   password: '',
  //   firstName: '',
  //   lastName: ''
  // };

  loginForm: FormGroup;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getUser()
    this.loginForm = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required]
    });

    this.returnUrl = this.route.queryParams['returnUrl'] || '/';
  }

  // const params = this.route.snapshot.params;
  // this.userService.getUser(params.id).subscribe(
  //   res => {
  //     this.user = res;
  //     console.log(this.user)
  //   }
  // )

  // getUser() {
  //   return this.userService.getUser(this.params.id).subscribe(
  //     res => {
  //       this.user = res
  //       console.log(res)
  //     }
  //   )
  // }

  login(formData: NgForm) {
    // console.log(this.user.userId)
    return this.userService.login(formData).subscribe(
      (user) => {
        if (user) {
          this.userService.getUser(user)
          this.router.navigate(['/dashboard', user.userId])
        }
        // this.router.navigate(["/dashboard"])
        // this.router.navigate([this.returnUrl]);
        console.log(user)
      });
    console.log(formData);
  }

}
