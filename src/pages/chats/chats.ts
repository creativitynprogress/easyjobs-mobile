import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatPage} from '../chat/chat';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  chats=[
    {
      id:0,
      name:"Gerson Flores Acuña",
      img:"https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/20994316_10210084188362938_8350274175107890819_n.jpg?_nc_eui2=v1%3AAeGsajZjJ2p_AxZhaI0fov7liSWY5cl1U4zALmnr3J7Z8WBMoB7qZzfHVt3GWdzDJE8Z2IUWR1GFuNyGdf_6XARMmrkI5pMtocU2Ds_G07DJYA&oh=155b8eca61a13a40f85f7acb7f3c6669&oe=5A8DA827",
      lastMesagge:"Que esta pasando doctor Garcia"
    },
    {
      id:1,
      name:"Luis Conde Rodriguez",
      img:"https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/20245987_1205576972919790_1174662344450534262_n.jpg?_nc_eui2=v1%3AAeEoo7Jhnufc-0Q1Hr3cWW6G80HK3BL3fGpNgoW5hNYIMo3Ii6yYB0e0bN26Gs_FzbZhMrJmXjLf26zjkaGQoT2GZWMHzqKJiDwznINjqp0j0A&oh=4ccd69db0f4fc0370a1d71edbad8e694&oe=5AA9470E",
      lastMesagge:"Django tiene hambre"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

  openChat(){
    this.navCtrl.push(ChatPage);
  }

}
