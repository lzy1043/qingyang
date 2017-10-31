import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  hotnewsGroup: any;
  hotnews: any;
  initData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() :void {
    this.http.get('http://localhost:3000/hotnewsgroup', {observe: 'response'}).subscribe(data => {
      this.hotnewsGroup = data.body['blocks'];
    })

    this.http.get('http://localhost:3000/hotnews', {observe: 'response'}).subscribe( data => {
      this.hotnews = data.body;
    })

    this.http.get('http://localhost:3000/index?page=1&key=TODAY', {observe: 'response'}).subscribe( data => {
      this.initData = data.body;
    })
  }
}
