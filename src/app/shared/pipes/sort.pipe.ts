import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
//transform is called all times if pure is set to false
//tranform is called whenver object is changed
//stateful pipe
sortedItems:any[];
actualItems:any[];
  transform(items: any[], 
           fieldName: string, 
           order: string = 'asc'): any {
             console.log('sort pipe called');
    if (!items || !fieldName) {
      return items;
    }

    if (order === 'asc') {
      return items.sort ( (left, right) => {
            if (left[fieldName] < right[fieldName])
              return -1;

            return 1
      })
    }

    // desc
    return items.sort ( (left, right) => {
      if (left[fieldName] < right[fieldName])
        return 1;

      return -1
    })

  }

}
