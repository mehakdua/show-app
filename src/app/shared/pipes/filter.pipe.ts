import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], 
    genders: string[],
    species: string[]): any[] {
      
    if (!items || !genders ) {
    return items;
    }
    
    /*if (predicate == '>') {
    // return items.filter(item => item[field] > value)
    return items.filter(function(item: any):boolean {
    return item[field] > value
    })
    }

    if (predicate == '<') {
    return items.filter(item => item[field] < value)
    }

    if (predicate == '==') {
    return items.filter(item => item[field] == value)
    }*/
    if(genders){
      items = items.filter(item => item['gender'].indexOf(genders) >-1);
    }
    if(species){
      items = items.filter(item => item['species'].indexOf(species) >-1);
    }
    }

}
