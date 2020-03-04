import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/show';
import { Observable } from 'rxjs';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private shows:Show[];
  constructor(private http:HttpClient) { }
  getData(): Observable<Config> {
    //FIXME: implement get api for products
    return this.http.get<Config>(`https://rickandmortyapi.com/api/character/`);
  }

  setData() {

  }
  getDays(d:string){
    const date = new Date(d);
    const today =new Date();
    const differenceInTime = today.getTime() - date.getTime(); 
  
    // To calculate the no. of days between two dates 
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    if(differenceInDays >365){
      return Math.floor(differenceInDays/365);
    } 
  }
}
