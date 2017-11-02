import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppService {
  constructor (private http: HttpClient) {}

  getNewsList (page = 1, key: string = 'TODAY'):Promise<any>{
    return new Promise ((resolve, reject) => {
      this.http.get(`http://localhost:3000/index?page=${page}&key=${key}`, {observe: 'response'})
        .subscribe((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        })
    });
  }
}