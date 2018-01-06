import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PortfolioPage} from '../portfolio/portfolio';

/**
 * Generated class for the ProfessionalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professionals',
  templateUrl: 'professionals.html',
})
export class ProfessionalsPage {
  professionals=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.professionals.push({
      name:"Adrian Alvarez",
      img:"https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/13173723_10209270209893562_5127341971785259498_n.jpg?oh=2409a808d888bf006845b3060bc18ef1&oe=5A911C44",
      carrer:"Ingeniero en Ciencias de la Compùtación"
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessionalsPage');
  }

  portfolio(){
    this.navCtrl.push(PortfolioPage);
  }

}
