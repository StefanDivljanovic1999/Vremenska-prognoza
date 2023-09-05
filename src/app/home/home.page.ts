import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public res; 
  public restr;
  constructor(
    private weatherAPI:WeatherService
    ) {}

  

  ngOnInit(){
   this.getWeatherData();
  }



  public getWeatherData(){
    this.weatherAPI.getWeatherData().subscribe((response) => {
    this.res =response;
    console.log(this.res);
    });
   
   }

   



   doRefresh(event){
    console.log('Osvezavanje podataka u toku...');
    this.weatherAPI.getWeatherData().subscribe((response) =>{
      this.res=response;
      console.log(this.res);
      console.log('osvezavanje podataka uspesno.');
      //event.target.complete();
      event.target.complete();
    });
   }
   }




