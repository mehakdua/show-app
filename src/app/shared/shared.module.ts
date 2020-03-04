import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FilterItemsPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [SortPipe, FilterItemsPipe, SearchPipe],
  imports: [
    CommonModule
  ],
  exports :[
    SortPipe,
    FilterItemsPipe,
    SearchPipe
  ]
})
export class SharedModule { }
