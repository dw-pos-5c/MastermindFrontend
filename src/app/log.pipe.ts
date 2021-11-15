import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'log'
})
export class LogPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value.includes(args[0])) {
      return '** irrelevant request **'
    }
    return value;
  }
}
