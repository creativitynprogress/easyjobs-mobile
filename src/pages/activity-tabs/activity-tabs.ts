import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfessionalsPage} from '../professionals/professionals';
import { ActivityAnnoucementsPage} from '../activity-annoucements/activity-annoucements';

/**
 * Generated class for the ActivityTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-tabs',
  templateUrl: 'activity-tabs.html',
})
export class ActivityTabsPage {
  title:string;
  tab1Root=ProfessionalsPage;
  tab2Root=ActivityAnnoucementsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get("title");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityTabsPage');
  }

}
