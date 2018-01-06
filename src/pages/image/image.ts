import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
  image:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image=navParams.get("img");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');

  }

}
