import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class IndexService {
  constructor (private http: HttpClient) {}

  getHotNewsGroup(): Promise<any> {
    return new Promise(function(resolve, reject){
      this.http.get('http://localhost:3000/hotnewsgroup', {observe: 'response'}).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      })
    })
    // return this.http.get('http://localhost:3000/hotnewsgroup').toPromise()
    //   .then((response: Response) => response).catch(function(message) {
    //         console.log(message);
    //     });

  }
}