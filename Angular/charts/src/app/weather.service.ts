import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  result:any;
  constructor(private _http: HttpClient) { }
  dailyForecast() {
    return this._http.get("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=b5684ef6f4f377dc9beb59e802ad2cd7")
    .pipe(map(result =>  this.result = result  ));
  }
}
