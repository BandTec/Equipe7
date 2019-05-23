import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../../services/grafico.service';
import { Chart } from 'chart.js';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs-compat/operator/map';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  chart: any = [];
  chartDate = [];
  chartTempMax = [];
  chartTempMin = [];


  constructor(private chartjs: GraficoService) { }


  ngOnInit() {
    setInterval(() => {
      this.chartjs.getAllDados().subscribe(
        res => {

          let temp_max = res['recordset'].map(res => res.tempMax);
          let temp_min = res['recordset'].map(res => res.tempMin);
          let alldates = res['recordset'].map(res => res.hora);

          temp_max.forEach((res) => {
            this.chartTempMax.push(res);
          })

          temp_min.forEach((res) => {
            this.chartTempMin.push(res);
          })

          // console.log(chartDate)
          alldates.forEach((res) => {
            let jsdate = new Date(res)
            this.chartDate.push(jsdate.toLocaleTimeString('en', {
              hour: 'numeric'
            }))
          })

          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: this.chartDate,
              datasets: [
                {
                  data: this.chartTempMax,
                  borderColor: '#3cba9f',
                  fill: false
                },
                {
                  data: this.chartTempMin,
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

