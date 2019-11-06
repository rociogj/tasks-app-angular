import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {
  // method transform injected from interface PipeTransform needed to convert our value
  transform(values: [], arg?: string): any {
    console.log('values', values)
    console.log('arg', arg)
    return arg ? values.filter((elem: any) => elem.name.toLowerCase().includes(arg)) : values
  }

}
