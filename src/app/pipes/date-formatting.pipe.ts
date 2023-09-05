import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting'
})
export class DateFormattingPipe implements PipeTransform {

  transform(unixTimeStamp: string[]): unknown {
   let a= new Date(+unixTimeStamp*1000);
   let months=['Jan','Feb','Mar','Apr','Maj','Jun','Jul','Avg','Sept','Okt','Nov','Dec'];
   let days=['Ned','Pon','Uto','Sre','Cet','Pet','Sub'];
   return days[a.getDay()]+', ' + a.getDate()+' '+months[a.getMonth()];
  }

}
