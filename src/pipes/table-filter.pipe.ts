import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  // method transform injected from interface PipeTransform needed to convert our value
  transform(values: any, arg?: string): any {
    return arg ? values.filter((elem: any) => elem.name.toLowerCase().includes(arg)) : values
  }

}
