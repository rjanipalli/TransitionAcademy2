import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Chart } from 'chart.js';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { map } from 'rxjs/operators';
//import { Color } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //[x: string]: any;
  objectKeys = Object.keys;
  cryptos: any;
  chart: any = [];


  constructor(private _data: DataService) {

  }
  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);

      })
    //.pipe(map(result =>  this.result = result ));
    this._data.dailyForecast()
      .subscribe((res: any[]) => {
        // console.log(res)
        //this.cryptos = res;
        this.chart = res;
        let temp_max = [] 
        temp_max =  this.chart.Data.Data
       // let temp_min = res['Data'].map(res => res.Data.Data.low)
       let alldates = this.chart.Data.Data.time
       // let alldates = res['Data'].map(res => res.Data.Data.time)
        // let alldates1 = res['Data'].pipe(map())
        let cryptoDates = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          cryptoDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        })

        //console.log(cryptoDates);
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: alldates,
            datasets: [{
              label: '$',
              data: temp_max,
              //backgroundColor:
              borderColor: 'rgba(247,147,26,1)',
              borderJoinStyle: 'round',
              borderCapStyle: 'round',
              borderWidth: 3,
              pointRadius: 0,
              pointHitRadius: 10
              //  lineTension: 0.2
            }]
          },

          options: {
            /*    title: {
                 display: false,
                 text: 'Heckin Chart!',
                 fontSize: 35
               }, */

            /*       legend: {
                    display: false
                  }, */

            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }
            },

            scales: {
              x: {
                suggestedMin: 50,
                suggestedMax: 100
              },
              y: {
                suggestedMin: 50,
                suggestedMax: 100
              }
            },

            /*        tooltips: {
                     callbacks: {
                       //This removes the tooltip title
                       title: function() {}
                    },
                     //this removes legend color
                     displayColors: false,
                     yPadding: 10,
                     xPadding: 10,
                     position: 'nearest',
                     caretSize: 10,
                     backgroundColor: 'rgba(255,255,255,.9)',
                     bodyFontSize: 15,
                     bodyFontColor: '#303030' 
                   } */
          }
        })







      })
  }
}
function res(res: any, arg1: any, arg2: {
  // console.log(res);
  //this.cryptos = res;
  let: any; temp_max: any; temp_min: any; alldates: any; cryptoDates: undefined[]; "": any;
  //console.log(cryptoDates);
  this: Chart<"line", any, unknown>;
}) {
  throw new Error('Function not implemented.');
}

