import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser/src/browser/title';
import {ActivityTabsPage} from '../activity-tabs/activity-tabs'

/**
 * Generated class for the SubcategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subcategories',
  templateUrl: 'subcategories.html',
})
export class SubcategoriesPage {
  title:string;
  subCategories=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.get("title");
    for(let i=0;i<10;i++){

      let element={
        title:"Subcategoria "+(i+1),
        visible:false,
        activities:[]
      }

      for(let j=0;j<5;j++){
        
        element.activities.push({
          title:"Actividad "+(j+1)
        });
      
    }
    this.subCategories.push(element)

    }
  }

  visible(subcategory){
    subcategory.visible=!subcategory.visible;
  }

  activity(title:string){
    this.navCtrl.push(ActivityTabsPage,{title:title});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubcategoriesPage');
  }

}
