import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../Interfaces/products';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(value: String[]): String[] {
    if (value) {
      return value.sort((a: String, b: String) => {
        if (a < b) {
          return -1;
        } else if (b < b) {
          return 1;
        }
        return 0;
      });
    }

    return [];
  }
}
