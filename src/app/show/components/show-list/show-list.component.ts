import { Component, OnInit } from '@angular/core';
import { Show } from '../../models/show';
import { ShowService } from '../../services/show.service';
import { Observable } from 'rxjs';
import { Config } from '../../models/config';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss']
})
export class ShowListComponent implements OnInit {
  shows: Show[];
  selectedOrder: string = 'asc';
  genders: string[];
  species: string[];
  origins: string[];
  searchText: string = '';
  gendersChecked: string[] = [];
  speciesChecked: string[] = [];
  originChecked: string[] = [];
  filters:String[];
  
  constructor(private showService: ShowService) {

  }

  ngOnInit(): void {
    this.showService.getData().subscribe((data) => {
      this.shows = data.results;
      this.shows.map(x => x.days = this.showService.getDays(x.created));
      this.genders = this.getData('gender');
      this.gendersChecked = [...this.genders];
      this.species = this.getData('species');
      this.speciesChecked = [...this.species];
      this.origins = data.results.map(x => x.origin.name).filter(function (v, i, self) { return self.indexOf(v) == i; });
      this.originChecked = [...this.origins];
      this.filters = [... this.speciesChecked,...this.originChecked,...this.gendersChecked];
    });

  }
  getData(field: string) {
    return this.shows.map(x => x[field]).filter(function (v, i, self) { return self.indexOf(v) == i; });
  }
  onChange(arr: string[], field: string, isChecked: boolean) {
    if (isChecked && arr.indexOf(field) === -1) {
      arr.push(field);
    } else if (arr.indexOf(field) > -1) {
      let i = arr.findIndex(x => x === field);
      arr.splice(i, 1);
    }
    this.filters = [... this.speciesChecked,...this.originChecked,...this.gendersChecked];
  }

}
