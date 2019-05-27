import { Component } from '@angular/core';
import { GraficoService } from '../../services/grafico.service';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  chartTemperaturaCPU: any = [];


  constructor(private chartjs: GraficoService) { }
  
  ngOnInit() {
    this.chartTempMaxTempMin();
  }

  chartTempMaxTempMin(){
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

