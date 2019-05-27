import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { GraficoService } from 'src/app/Site/services/grafico.service';
import { UsersService } from 'src/app/Site/services/users.service';


@Component({
  selector: 'app-perfil-dashboard',
  templateUrl: './perfil-dashboard.component.html',
  styleUrls: ['./perfil-dashboard.component.css']
})
export class PerfilDashboardComponent implements OnInit {
  chartTemperaturaCPU: any = [];
  chartMemoriaRam: any = [];

  id: string

  user: any = [];
  hardware: any = []

  constructor(private router: Router, private chartjs: GraficoService, private usersService: UsersService) { }


  ngOnInit() {
    this.getUser();
    // this.id = localStorage.getItem('token');
    this.chartTempMaxTempMin();
    this.chartUsoMemoriaRam();
  }

  getUser() {
    this.usersService.getHardware().subscribe(
      res => {
        this.hardware = res;
      },
      err => console.error(err)
    );
  }

  chartUsoMemoriaRam() {
    let chartTempMax: any = [];
    let chartTempMin: any = [];

    setTimeout(() => {
      this.chartjs.getAllDados().subscribe(
        res => {

          let temp_max = res['recordset'].map(res => res.tempMax);
          let temp_min = res['recordset'].map(res => res.tempMin);

          // temp_max.forEach((res) => {
          //   chartTempMax.push(res);
          // })

          // temp_min.forEach((res) => {
          //   chartTempMin.push(res);
          // })

          this.chartMemoriaRam = new Chart('memoriaRam', {
            type: 'pie',
            data: {
              datasets: [{
                data: [
                  temp_max,
                  temp_min,
                ],
                backgroundColor: [
                  '#3cba9f',
                  '#ffcc00'
                ],
              }],
              labels: [
                'Em uso',
                'Livre'
              ]
            },
            options: {
              responsive: true,
              legend: {
                display: false
              },
            }
          })
        },
        err => {
          console.log(err)
        }
      );
    }, 200);
  }

  chartTempMaxTempMin() {
    let chartTempMax = [];
    let chartDate = [];
    let chartTempMin = [];

    setInterval(() => {
      this.chartjs.getAllDados().subscribe(
        res => {
          let temp_max = res['recordset'].map(res => res.tempMax);
          let temp_min = res['recordset'].map(res => res.tempMin);
          let alldates = res['recordset'].map(res => res.hora);

          temp_max.forEach((res) => {
            chartTempMax.push(res);
          })

          temp_min.forEach((res) => {
            chartTempMin.push(res);
          })

          alldates.forEach((res) => {
            let jsdate = new Date(res)
            chartDate.push(jsdate.toLocaleTimeString('en', {
              hour: 'numeric'
            }))
          })

          if (chartTempMax.length > 20) {
            chartTempMax.splice(0, 1)
          }

          if (chartTempMin.length > 20) {
            chartTempMin.splice(0, 1)
          }

          this.chartTemperaturaCPU = new Chart('canvas', {
            type: 'line',
            data: {
              labels: chartDate,
              datasets: [
                {
                  data: chartTempMax,
                  borderColor: '#3cba9f',
                  fill: false
                },
                {
                  data: chartTempMin,
                  borderColor: '#ffcc00',
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display: true
                }],
                yAxes: [{
                  display: true
                }]
              }
            }
          })
        },
        err => {
          console.log(err)
        }
      );
    }, 10000)

  }

}
