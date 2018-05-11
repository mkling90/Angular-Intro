// ng g pipe convertToSpaces -> to automatically create with cli
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
// 1st argument - value being piped
// 2nd argument is for any arguments (passed in after the pipe)
// last value is the return value type
  transform(value: string, args?: string): string {
    return value.replace(args, ' ');
  }

}
