import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      if (args[1]) {
        return value * args[0] * (1 + args[1] / 100);
      }
      return value * args[0];
    }
    return null;
  }
}
