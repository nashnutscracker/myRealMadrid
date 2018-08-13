import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { WebPage } from '../web/web';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: Observable<any>;
  news1: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.news = this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=771903b501bb4fc3b890665d6531ebae');
    this.news1 = this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=the-sport-bible&apiKey=771903b501bb4fc3b890665d6531ebae');
  }

  web() {
    this.navCtrl.push(WebPage);
  }
}
