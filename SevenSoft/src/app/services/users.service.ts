import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(`${this.API_URI}/user`);
  }

  getUser(id: string) {
    console.log(id)
    return this.http.get<any>(`${this.API_URI}/user/${id}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URI}/user/${id}`);
  }

  saveUser(user: User) {
    return this.http.post(`${this.API_URI}/user`, user);
  }

  updateUser(id: string | number, updatedUser: User): Observable<any> {
    //console.log(updatedUser)
    return this.http.put(`${this.API_URI}/user/${id}`, updatedUser);
  }

}
