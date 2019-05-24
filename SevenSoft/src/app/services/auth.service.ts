import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/operator/map'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  private API_URI = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {
    // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // this.token = currentUser && currentUser.token;
  }
  public user: Login;


  // login(username: string, password: string): Observable<void> {
  //   return this.http.post<void>(this.API_URI, { username: username, password: password }).pipe(
  //     map(user => {
  //       if (user && user.token) {
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //       }
  //       return user;
  //     })
  //   );

  // }

  // login(username: string, password: string): Observable<boolean> {
  //   let body = JSON.stringify({ username: username, password: password });
  //   return this.http.post(this.API_URI, body).map((response: Response) => {
  //     let token = response.json() && response.json().token;
  //     if (token) {
  //       this.token = token;
  //       localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
  //       return true
  //     }
  //   })

  // }

  entrar(user: Login): Observable<Login> {
    return this.http.post(`${this.API_URI}/login/`, user);
  }
  //subscribe(
  //     res => {
  //       console.log(res);
  //       this.router.navigate(['/user']);
  //     },
  //     err => console.error(err)
  //   )
  // async entrar(credentials: any): Promise<any> {
  //   let data: any = await this.http.post(`${this.API_URI}/login`, credentials).map(res => json.parse(r)).toPromise();
  //   this.token = data.token;
  //     this.storage.set('token', data.token);
  //   return credentials
  // }

  // async entrar(credentials: any): Promise<any> {
  //   let data: any = await this.http.post(`${this.API_URI}/login`, credentials).map(r => r.json()).toPromise();
  //   let body = JSON.stringify({ username: username, password: password });
  //   return this.http.post(`${this.API_URI}/login/`, body).map((response: Response) => {
  //     let token = response.json() && response.json.token;
  //   })
  // }

  // entrar(username: string, password: string):Observable<any> {
  //   let body = JSON.stringify({ username: username, password: password });
  //   return this.http.post(`${this.API_URI}/login/`, body).map((response:Response)=>{
  //     let token = response.json() && response.json.token;
  //   })
  // }

  // entrar(login: Login) {
  //   return this.http.post(`${this.API_URI}/login/`, login);
  // }





  // entrar(login: Login) {
  //   return this.http.post(`${this.API_URI}/login/`, login);
  // }

  logout(): void {
    // this.token = null;
    // localStorage.removeItem('currentUser');
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }
}
