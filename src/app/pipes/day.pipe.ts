import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: unknown): unknown {
    let a= new Date(+value*1000);
    let days=['Ned','Pon','Uto','Sre','Cet','Pet','Sub']
    return days[a.getDay()];
  }

}
