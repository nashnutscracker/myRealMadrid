import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamsConfigConst } from '../../assets/teams';
import { WebPage } from '../web/web';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  TeamConfigObj = TeamsConfigConst;
  constructor(public navCtrl: NavController) {

  }
  web() {
    this.navCtrl.push(WebPage);
  }
}
