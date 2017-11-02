import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})


export class NavItemComponent implements OnInit {

  newList: any;
  page: number = 1;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private appService: AppService
  ) { }

  ngOnInit() {
    const path: string = this.route.snapshot.routeConfig.path.toUpperCase();
    this.appService.getNewsList(1, path).then(data => {
      this.newList = data.body;
    })
  }

  scrollLoad (): void {
    console.log('nav-item')
    // const path: string = this.route.snapshot.routeConfig.path.toUpperCase();
    // const scrollTop = document.documentElement.scrollTop
    // const bodyHeight = document.documentElement.scrollHeight
    // const pageHeight = window.innerHeight
    // if (Math.ceil(scrollTop) === bodyHeight - pageHeight) {
    //   this.page++
    //   this.appService.getNewsList(this.page, path).then(data => {
    //     this.newList.concat = this.newList.push(...data.body)
    //   })
    // }
  }

  ngAfterViewInit(): void {
    let page:number = 1;
    const path: string = this.route.snapshot.routeConfig.path.toUpperCase();
    window.addEventListener('scroll', this.scrollLoad, false)
  }

  ngOnDestroy(): void{
    window.removeEventListener('scroll', this.scrollLoad , false)
  }

}
