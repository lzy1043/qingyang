import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexService } from './index.service';
import { AppService } from '../app.service';

@Component({
  selector: 'app-index',
  providers: [IndexService],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  hotnewsGroup: any;
  hotnews: any;
  initData: any;
  page: number = 1;

  constructor(
    private http: HttpClient,
    private indexService: IndexService,
    private appService: AppService
  ) { }

  ngOnInit() :void {
    this.indexService.getHotNewsGroup().then(data => {
      this.hotnewsGroup = data.body.blocks;
    }).catch(error => {
      console.log(error)
    });

    this.indexService.getHotNews().then(data => {
      this.hotnews = data.body;
    }).catch((error) => {
      console.log(error)
    })

    this.appService.getNewsList().then(data => {
      this.initData = data.body;
    }).catch((error) => {
      console.log(error)
    })
  }

  scrollLoad (obj): any {
    const scrollTop = document.documentElement.scrollTop
    const bodyHeight = document.documentElement.scrollHeight
    const pageHeight = window.innerHeight
    if (Math.ceil(scrollTop) === bodyHeight - pageHeight) {
      this.page++
      this.appService.getNewsList(this.page).then(data => {
        this.initData.concat = this.initData.push(...data.body)
      })
    }
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scrollLoad, false)
  }

  ngOnDestroy(): void{
    window.removeEventListener('scroll', this.scrollLoad, false)
  }
}
