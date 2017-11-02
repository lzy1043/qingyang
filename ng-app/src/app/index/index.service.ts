import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class IndexService {
  constructor (private http: HttpClient) {}

  getHotNewsGroup(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/hotnewsgroup', {observe: 'response'}).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      })
    })
  }
  getHotNews(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/hotnews', {observe: 'response'}).subscribe( data => {
        resolve(data);
      }, error => {
        reject(error);
      })
    })
  }
}