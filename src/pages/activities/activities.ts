import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfessionalsPage } from '../professionals/professionals';
import { ActivityTabsPage} from '../activity-tabs/activity-tabs';

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {
  title:string;
  activities=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get("title");
    for(let i:number=1;i<=10;i++){
      this.activities.push({
        name:`Actividad ${i}`
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivitiesPage');
  }

  professional(title:string){
    this.navCtrl.push(ActivityTabsPage,{title:title})
  }

}
