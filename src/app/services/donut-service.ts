import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Donut } from '../interfaces/donut';
import { HttpClient } from '@angular/common/http';
import { Donuts } from '../interfaces/donuts';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private httpClient:HttpClient ) {}

  getAllDonutsList() : Observable<Donuts>{
    return this.httpClient.get<Donuts>(environment.donutsListEndpoint);
  }

  
  getDonutDetails() : Observable<Donut>{
    
    return this.httpClient.get<Donut>(`https://grandcircusco.github.io/demo-apis/donuts/4.json`);
  }

}
