import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'ngxCurrentTime' })
export class CurrentTimePipe implements PipeTransform {

  transform(date: Date) : string {
    const startTime = moment ( date || new Date());
    const endTime = moment(new Date());

    const minutes = endTime.diff(startTime, 'minute');
    const hours = endTime.diff(startTime, 'hour');
    const day = endTime.diff(startTime, 'day');


    if(minutes < 1){
      return `${'há menos de um minuto.'}`
    }

    else if (minutes >= 1 && minutes < 60){
      return `${minutes + ' minutos atrás.'}`
    }

    else if(minutes >= 60 && minutes < 1.440){
      return `${hours + ' horas atrás.'}`
    }

    else if (minutes >= 1440){
      return `${day + ' dias atrás'}`
    }

    return `${hours + ' horas'}`
  }
}

