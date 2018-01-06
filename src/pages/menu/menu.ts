import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import {CategoriesPage} from '../categories/categories';
import { LoginPage} from '../login/login';
import {PortfolioPage} from '../portfolio/portfolio';
import { ChatsPage} from '../chats/chats';
import { AnnoucementsPage } from '../annoucements/annoucements';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  @ViewChild(Nav) nav: Nav;

  rootPage=CategoriesPage;
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      { title: 'Categorìas', component: CategoriesPage, icon: 'search'},
      { title: 'Mi portafolio', component: PortfolioPage, icon: 'briefcase'},
      { title: 'Mis chats', component: ChatsPage, icon: 'chatbubbles'},
      { title: 'Mis convocatorias', component: AnnoucementsPage, icon: 'construct'},
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
      this.nav.setRoot(page.component);
   
  }

  onclick_logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
