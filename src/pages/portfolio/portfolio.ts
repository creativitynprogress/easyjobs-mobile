import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ActionSheetController } from 'ionic-angular';
import {ImagePage} from '../image/image';

/**
 * Generated class for the PortfolioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-portfolio',
  templateUrl: 'portfolio.html',
})
export class PortfolioPage {

  images=[];
  documents=[];
  activities=[];
  sex:string;
  tabs="information";

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController,
     public actionSheetCtrl: ActionSheetController
    ) {
    for(let i=0;i<7;i++){
      this.images.push({
        id:i,
        img:"https://scontent.fpbc1-1.fna.fbcdn.net/v/t1.0-9/11406815_10206863088677036_6236033625357695155_n.jpg?_nc_eui2=v1%3AAeGeKu6xyL6m8A2ufsmJUFEnkERHTqEcBMAem13HurSvaoROJLfafO9gcVMCWvwNNbUbE4S2769g96ZVXH-3GGThWB-YYYcSiqeEBg1eJmyxGw&oh=e4945fae04dfcd0cdc916e9e5274bb06&oe=5AA7F78D"
      });
    }

    for(let i=0;i<7;i++){
      this.documents.push({
        id:i,
        img:"http://images.eldiario.es/economia/Documento-Soria-sucesor-UK-Lines_EDIIMA20160413_0424_5.jpg"
      });
    }
  }

  selectSex(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Seleccionar sexo');

    alert.addInput({
      type: 'radio',
      label: 'Masculino',
      value: 'Masculino',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Femenino',
      value: 'Femenino',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {
          this.sex=data;
      }
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortfolioPage');
  }

  showImage(image:string){
    this.navCtrl.push(ImagePage,{img:image});
  }

  optionsImage(image:string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
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
          }
        },
        {
          text: 'Ver',
          handler: () => {
            this.showImage(image);
          }
        }
      ]
    });
 
    actionSheet.present();
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

}
