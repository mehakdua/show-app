import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/show';
import { Observable } from 'rxjs';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Config> {
    //FIXME: implement get api for products
    return this.http.get<Config>(`https://rickandmortyapi.com/api/character/`);
  }
}
