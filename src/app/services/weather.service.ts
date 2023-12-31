import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomePage } from '../home/home.page';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }



  getWeatherData(city): Observable<any>{
    let lat=44.787197;
    let lon=20.457273;
    let APIID= 'b3162050a9659e41420aba50c50aa5b2';
   if(city==null){
    city='Belgrade';
   }
    
  let queryString=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIID}`;
    //let queryString= `https://api.openweathermap.org/data/2.5/forecast?q=${city},${'RS'}&appid=${APIID}`
    return this.http.get(queryString);
  }

 
}
