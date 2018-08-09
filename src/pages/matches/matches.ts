import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsConfigConst } from '../../assets/teams';
import { MatchConfigConst } from '../../assets/teams';

/**
 * Generated class for the MatchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html',
})
export class MatchesPage {
  TeamConfigObj = TeamsConfigConst;
  MatchConfigObj = MatchConfigConst;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
