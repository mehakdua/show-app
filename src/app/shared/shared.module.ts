import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { MyfilterPipe } from './pipes/myfilter.pipe';
import { MySearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [SortPipe, FilterPipe, MyfilterPipe, MySearchPipe],
  imports: [
    CommonModule
  ],
  exports :[
    SortPipe,
    MyfilterPipe,
    MySearchPipe
  ]
})
export class SharedModule { }
