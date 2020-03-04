import { Pipe, PipeTransform } from '@angular/core';
import { Show } from 'src/app/show/models/show';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Show[],searchText:string): any {
    if(!searchText){
      return items;
    }
    return items.filter(item=> item['name'].toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
