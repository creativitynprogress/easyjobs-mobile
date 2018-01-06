import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the AddAnnoucementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-annoucement',
  templateUrl: 'add-annoucement.html',
})
export class AddAnnoucementPage {

  activities=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    /*for(let i:number=1;i<=3;i++){
      this.activities.push({name:"Actividad "+i});
    }*/
  }

  alertActivities(category:string) {
    let alert = this.alertCtrl.create();
    alert.setTitle(category);

    for(let i:number=1;i<5;i++){

      alert.addInput({
        type: 'radio',
        label: 'Actividad '+i,
        value: 'Actividad '+i,
        checked: false
      });
    }
    

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.activities.push({
          name:data
        });
      }
    });
    alert.present();
  }

  removeActivity(i:number){
    this.activities.splice(i,1)
  }

  subcategories(category:string){
    let alert = this.alertCtrl.create();
    alert.setTitle(category);

    for(let i:number=1;i<5;i++){

      alert.addInput({
        type: 'radio',
        label: 'Subcategoría '+i,
        value: 'Subcategoría '+i,
        checked: false
      });
    }
    

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.alertActivities(data);
      }
    });
    alert.present();
  }

  addActivity() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Categorías');

    for(let i:number=1;i<=5;i++){
      alert.addInput({
        type: 'radio',
        label: 'Categoría '+i,
        value: 'Categoría '+i,
        checked: false
      });
    }

    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
          this.subcategories(data);
      }
    });
    alert.present();
  }


  createAnoucement(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAnnoucementPage');
  }

}
