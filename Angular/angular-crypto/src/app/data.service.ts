import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  result:any;

  constructor(private _http:HttpClient) {}

  getPrices() {
   // return this._http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD").map(result =>  this.result = result );
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,ADA&tsyms=USD&api_key={5c62035031c5baeeae3a004b6c7278deb5d4468a6c025e3d277f21004031eca4}')
 .pipe(map(result =>  this.result = result ));
  }
  dailyForecast() {
    return this._http.get("https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10")
      .pipe(map(result =>  this.result = result ));
  }
  //getBinance(){

  
}
