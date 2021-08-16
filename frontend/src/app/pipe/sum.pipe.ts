import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(items: any[] | null, attr: string): any | null {

  if (!items || !attr) {
    return items;
  }
    return items.reduce((a, b) => a + b[attr], 0);
  }

}
