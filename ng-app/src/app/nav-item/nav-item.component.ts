import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})


export class NavItemComponent implements OnInit {

  newList: any;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.routeConfig.path);
    const path: string = this.route.snapshot.routeConfig.path.toUpperCase();
    this.http.get(`http://localhost:3000/index?page=1&key=${path}`, {observe: 'response'}).subscribe(data => {
      this.newList = data.body;
    })
  }

}
