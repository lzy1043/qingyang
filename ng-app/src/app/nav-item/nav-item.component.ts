import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})

export class NavItemComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route)
  }

}
