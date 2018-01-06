import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityAnnoucementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activity-annoucements',
  templateUrl: 'activity-annoucements.html',
})
export class ActivityAnnoucementsPage {

  annoucements=[
    {
      title:"Calculadora cientifica Android/IOS",
      description:"Hacer una calculadora cientifica para Android e IOS que implemente solucion de derivadas integrales y ecuaciones diferenciales de forma local.",
      activities:[
        {
          name:"Actividad 1"
        },
        {
          name:"Actividad 2"
        },
        {
          name:"Actividad 3"
        }
      ]
  }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityAnnoucementsPage');
  }

}
