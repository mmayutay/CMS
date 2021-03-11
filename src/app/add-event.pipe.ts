import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addEvent'
})
export class AddEventPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
