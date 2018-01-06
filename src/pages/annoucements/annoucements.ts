import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ActionSheetController } from 'ionic-angular';
import { AddAnnoucementPage } from '../add-annoucement/add-annoucement';


/**
 * Generated class for the AnnoucementsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-annoucements',
  templateUrl: 'annoucements.html',
})
export class AnnoucementsPage {

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

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnnoucementsPage');
  }

  anoucementOptions(title:string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Editar',
          handler: () => {
            console.log('Archive clicked');
            this.navCtrl.push(AddAnnoucementPage);
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  addAn(){
    this.navCtrl.push(AddAnnoucementPage);
  }

}
