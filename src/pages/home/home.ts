import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamsConfigConst } from '../../assets/teams';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  TeamConfigObj = TeamsConfigConst;
  constructor(public navCtrl: NavController) {

  }

}
