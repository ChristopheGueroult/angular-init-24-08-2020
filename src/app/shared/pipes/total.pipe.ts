import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value) {
      if (args.length === 1) {
        return value.nbJours * value.tjmHt * (1 + value.tva / 100);

      }
      return value.nbJours * value.tjmHt;
    }
    return null;
  }
}
