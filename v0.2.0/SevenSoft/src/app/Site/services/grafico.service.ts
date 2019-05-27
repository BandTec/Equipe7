import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }


  getAllDados() {
    return this.http.get(`${this.API_URI}/grafico`).map(result => result);
  }

  getIdDado(id: string) {
    return this.http.get(`${this.API_URI}/grafico/${id}`).map(result => result);
  }

  dailyForecast() {
    return this.http.get("https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22").map(result => result);
  }
}
