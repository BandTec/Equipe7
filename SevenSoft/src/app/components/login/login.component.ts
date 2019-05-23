import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth.service';
import { NgClass } from '@angular/common';

//declare const myTest: any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = {
    username: '',
    password: ''
  };

  

  loginForm: FormGroup;
  message: string;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder, private router: Router, public authService: AuthService) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
    // this.returnUrl = '/dashboard';
    this.authService.logout();
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      return
    } else if (this.authService.entrar(this.loginForm.value)) {
      this.authService.entrar(this.user).subscribe(res => {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loginForm.value);
        this.router.navigate(['/dashboard']);
      })

    }
  }


  // login() {
  //   if (this.loginForm.invalid) {
  //     return
  //   } else if (this.loginForm.value == this.user) {
  //     this.authService.entrar(this.loginForm.value).subscribe(res => {
  //       console.log(this.f.username.value)
  //       console.log(this.user.username)
  //       console.log('Login com sucesso');
  //       localStorage.setItem('isLoggedIn', "true");
  //       localStorage.setItem('token', this.loginForm.value);
  //       // this.router.navigate([this.returnUrl]);
  //       this.router.navigate(['/dashboard']);
  //     })
  //   }
  //   else {
  //     // console.log(this.user.username)
  //     console.log(this.f.username.value)
  //     console.log(this.user)
  //     //console.log(this.loginForm.value)
  //     this.message = "Por favor verifique o nome de Usuario e a Senha"
  //   }
  // }
}

  // login() {
  //   if (this.loginForm.invalid) {
  //     return
  //   } else
  //     this.authService.entrar(this.user).subscribe(res => {
  //       if (this.f.username.value == this.user.username && this.f.password.value == this.user.password) {
  //         console.log("Login com sucesso");
  //         localStorage.setItem('isLoggedIn', "true");
  //         localStorage.setItem('token', this.loginForm.value);
  //         this.router.navigate([this.returnUrl]);
  //       } else {
  //         this.message = "Por favor verifique o userId e a senha";
  //       }
  //     }
  //   }



  //   res => {
  //       else {


  // //     }
  // //     localStorage.setItem('isLoggedIn', "true");
  // //     localStorage.setItem('token', this.loginForm.value);
  // //     this.router.navigate(['/dashboard']);
  // //   }
  // //   )
  // // }

  // login() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {
  //       console.log("Login com sucesso");
  //       localStorage.setItem('isLoggedIn', "true");
  //       localStorage.setItem('token', this.f.userId.value);
  //       this.router.navigate([this.returnUrl]);
  //     } else {
  //       this.message = "Por favor verifique o userId e a senha";
  //     }
  //   }
  // }






  // login() {
  //   // console.log(this.f.username.value)
  //   this.authService.entrar(this.user.username).subscribe(
  //     res => {
  //       console.log(res);
  //       // if (this.user.username == this.f.username.value) {
  //       //   this.router.navigate(['/dashboard']);
  //       // }
  //       this.router.navigate(['/dashboard']);
  //     },
  //     err => console.error(err)
  //   )
  // }
  // login() {
  //   this.authService.entrar(this.model)
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {
  //       console.log("Login com sucesso");
  //       localStorage.setItem('isLoggedIn', "true");
  //       localStorage.setItem('token', this.f.userId.value);
  //       this.router.navigate([this.returnUrl]);
  //     } else {
  //       this.message = "Por favor verifique o userId e a senha";
  //     }
  //   }

  // login() {
  //   this.loginForm.get()
  //   // console.log(this.f.username.value)
  //   this.authService.entrar(this.user.map(Login)).subscribe(
  //     res => {
  //       console.log(res);
  //       // if (this.user.username == this.f.username.value) {
  //       //   this.router.navigate(['/dashboard']);
  //       // }
  //       this.router.navigate(['/dashboard']);
  //     },
  //     err => console.error(err)
  //   )
  // }


  // login() {
  //   // console.log(this.f.username.value)
  //   this.authService.entrar(this.user.map(Login)).subscribe(
  //     res => {
  //       console.log(res);
  //       // if (this.user.username == this.f.username.value) {
  //       //   this.router.navigate(['/dashboard']);
  //       // }
  //       this.router.navigate(['/dashboard']);
  //     },
  //     err => console.error(err)
  //   )
  // }

  // login() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (this.f.userId.value == this.authService.entrar(this.model)) {
  //       console.log("Login com sucesso");
  //     }
  //   }




  // cadastrarNovoUsuario() {
  //   delete this.user.userId;
  //   this.userService.saveUser(this.user).subscribe(
  //     res => {
  //       console.log(res);
  //       this.router.navigate(['/user']);
  //     },
  //     err => console.error(err)
  //   )
  // }



  // login() {
  //   if (this.loginForm.invalid) {
  //     return;
  //   } else {
  //     if (this.f.userId.value == this.model.userId && this.f.password.value == this.model.password) {
  //       console.log("Login com sucesso");
  //       localStorage.setItem('isLoggedIn', "true");
  //       localStorage.setItem('token', this.f.userId.value);
  //       this.router.navigate([this.returnUrl]);
  //     } else {
  //       this.message = "Por favor verifique o userId e a senha";
  //     }
  //   }
  // }
