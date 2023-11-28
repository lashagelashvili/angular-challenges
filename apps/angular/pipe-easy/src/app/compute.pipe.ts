import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comput',
  standalone: true,
})
export class ComputePipe implements PipeTransform {
  transform(value: string, index: number) {
    return `${value} - ${index}`;
  }
}
