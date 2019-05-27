import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = {
  };

  cadastroForm: FormGroup

  constructor
    (
      private formBuilder: FormBuilder,
      private userService: UsersService, private router: Router,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      'username': [null, Validators.required],
      'password': [null, Validators.required],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
    })
  }

  cadastro(formData: NgForm) {
    return this.userService.cadastro(formData).subscribe(
      usr => {
        localStorage

        console.log(usr)
      });
    console.log(formData);
  }

}
