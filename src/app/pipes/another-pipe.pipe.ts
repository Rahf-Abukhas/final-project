import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anotherPipe',
  standalone: true
})
export class AnotherPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
