import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ActivitiesPage} from '../activities/activities';
import { SubcategoriesPage } from '../subcategories/subcategories';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',

  templateUrl: 'categories.html',
})
export class CategoriesPage {

  categories=[
    {
      id:0,
      img:"https://blog.educaweb.mx/wp-content/uploads/2016/06/derecho-fiscal-805x536.jpg",
      title:"Derecho",
      sub:[],
      visible:false
    },
    {
      id:1,
      img:"http://2.bp.blogspot.com/-FMlZPhEhfB4/VVnhHDV8Y2I/AAAAAAAAA3E/DwfxkVgeRB8/s1600/Contador.jpg",
      title:"Contaduría",
      sub:[],
      visible:false
    },
    {
      id:2,
      img:"http://www.iesch.edu.mx/tuxtla/wp-content/uploads/2013/07/QFB-IESCH-f03.jpg",
      title:"Quimico Farmacobiologo",
      sub:[],
      visible:false
    },
    {
      id:3,
      img:"https://www.obs-edu.com/sites/default/files/styles/blog_post/public/post/metodologias-de-desarrollo-de-software.gif?itok=tuT58G3J",
      title:"Desarrollo de software",
      sub:[],
      visible:false
    },
    {
      id:4,
      img:"http://www.sioingenieria.com/wenv/file_image.php?id=379&w=0&h=0&jpg=1&download=",
      title:"Ingeniería civil",
      sub:[],
      visible:false
    }

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      for(let i:number=0;i<this.categories.length;i++){
        for(let j:number=1;j<=5;j++){
          this.categories[i].sub.push({
            title:`subcategoria ${j}`
          });
        }
      }
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  subcategory(title:string){
    this.navCtrl.push(SubcategoriesPage,{title:title})
  }

  activity(title:string){
    this.navCtrl.push(ActivitiesPage,{title:title});
  }

}
