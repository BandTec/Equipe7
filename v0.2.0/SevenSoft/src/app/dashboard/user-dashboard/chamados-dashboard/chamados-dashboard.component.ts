import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UsersService } from 'src/app/Site/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chamados-dashboard',
  templateUrl: './chamados-dashboard.component.html',
  styleUrls: ['./chamados-dashboard.component.css']
})
export class ChamadosDashboardComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UsersService,
    private router: Router,
  ) {
    // this.createForm();
  }

  createForm() {
  }

  login(formData: NgForm) {
    return this.userService.login(formData).subscribe(
      usr => {
        this.router.navigate(['/dashboard'])
        // this.router.navigate([this.returnUrl]);
        console.log(usr)
      });
    console.log(formData);
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      'descricao': [null, Validators.required],
      'criticidade': [null, Validators.required],
      'opcao': [null, Validators.required]
    });
  }

}
