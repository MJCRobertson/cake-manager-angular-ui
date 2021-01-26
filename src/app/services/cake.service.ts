import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http:HttpClient) { }

  getCakes(){
    return this.http.get('/server/cakes');
  }

  getCake(id: number) {
    return this.http.get('/server/cakes/' + id)
  }

  createCake(cake) {
    let body = JSON.stringify(cake);
    return this.http.post('/server/cakes', body, httpOptions);
  }

}
