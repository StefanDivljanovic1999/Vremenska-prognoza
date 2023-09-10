import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public res; 
  jsonData:any=[];

  constructor(
    private weatherAPI:WeatherService
    ) {}

  

  ngOnInit(){
     this.getWeatherData(null);
  }

  FilterJSONData(ev:any){
    const val= ev.target.value;
    if(val && val.trim() != '' ){
      this.initializationJSONData();
      this.jsonData=this.jsonData.filter((item)=>{
        return(item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

initializationJSONData(){
  this.jsonData=[{
"name":'Beograd',
"code":"BG"},{
"name":'Arandjelovac',
"code":"AR"},
{"name":'Novi Sad',
"code":"NS"},{
"name":'Niš',
"code":"NI"},
{"name":'Priština',
"code":"PR"},{
"name":'Kragujevac',
"code":"KG"},
{
  "name":'Prizren',
  "code":"PZ"},{
  "name":'Smederevo',
  "code":"SD"},
  {"name":'Pozarevac',
  "code":"PO"},{
  "name":'Subotica',
  "code":"SU"},
  {"name":'Vrnjacka Banja',
  "code":"VB"},{
  "name":'Vršac',
  "code":"VS"},
  {
    "name":'Krusevac',
    "code":"KS"},{
    "name":'Prokuplje',
    "code":"PK"},
    {"name":'Priboj',
    "code":"PB"},{
    "name":'Kosovska Mitrovica',
    "code":"KM"},
    {"name":'Novi Pazar',
    "code":"NP"},{
    "name":'Sjenica',
    "code":"Sj"},
    {
      "name":'Kraljevo',
      "code":"KV"},{
      "name":'Aleksinac',
      "code":"AC"},
      {"name":'Aleksandrovac',
      "code":"AL"},{
      "name":'Sremski Karlovci',
      "code":"NS"},
      {"name":'Stara Pazova',
      "code":"ID"},{
      "name":'Indjija',
      "code":"ID"},
      {
        "name":'Uzice',
        "code":"UE"},{
        "name":'Bor',
        "code":"BO"},
        {"name":'Backa Palanka',
        "code":"BP"},{
        "name":'Valjevo',
        "code":"VA"},
        {"name":'Gornji Milanovac',
        "code":"GM"},{
        "name":'Zajecar',
        "code":"ZA"},

        {
          "name":'Zrenjanin',
          "code":"ZR"},{
          "name":'Kikinda',
          "code":"Ki"},
          {"name":'ŠID',
          "code":"SI"},{
          "name":'Lebane',
          "code":"LB"},
          {"name":'Leskovac',
          "code":"LE"},{
          "name":'Sombor',
          "code":"SO"},
    
  
];
}

deinitializationJSONData(){
  this.jsonData=null;
}

  public getWeatherData(city){
    this.weatherAPI.getWeatherData(city).subscribe((response) => {
    this.res =response;
    console.log(this.res);
    });
   
   }

   



  doRefresh(event){
    console.log('Osvezavanje podataka u toku...');
    this.weatherAPI.getWeatherData(null).subscribe((response) =>{
      this.res=response;
      console.log(this.res);
      console.log('osvezavanje podataka uspesno.');
      //event.target.complete();
      event.target.complete();

    });

    
   }
  selectVal(val){
    this.getWeatherData(val);
    this.deinitializationJSONData();
  }


 
  

}

 


