import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook} from '@ionic-native/facebook';
import { ParallaxHeader } from '../directives/parallax-header/parallax-header';
import { ActivityTabsPage} from '../pages/activity-tabs/activity-tabs';
import { ActivityAnnoucementsPage } from '../pages/activity-annoucements/activity-annoucements';
import { AddAnnoucementPage} from '../pages/add-annoucement/add-annoucement';

import { MyApp } from './app.component';
import { SubcategoriesPage } from '../pages/subcategories/subcategories'
import { LoginPage } from '../pages/login/login';
import { RegisterPage} from '../pages/register/register';
import {CategoriesPage} from '../pages/categories/categories';
import {MenuPage} from '../pages/menu/menu';
import {PortfolioPage} from '../pages/portfolio/portfolio';
import {ChatsPage} from '../pages/chats/chats';
import {ImagePage} from '../pages/image/image';
import {ChatPage} from '../pages/chat/chat';
import {ActivitiesPage} from '../pages/activities/activities';
import {ProfessionalsPage} from '../pages/professionals/professionals';
import { ApiRestProvider } from '../providers/api-rest/api-rest';
import { AnnoucementPage } from '../pages/annoucement/annoucement';
import { AnnoucementsPage} from '../pages/annoucements/annoucements';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    CategoriesPage,
    MenuPage,
    PortfolioPage,
    ChatsPage,
    ImagePage,
    ChatPage,
    ParallaxHeader,
    ActivitiesPage,
    ProfessionalsPage,
    AnnoucementPage,
    AnnoucementsPage,
    ActivityTabsPage,
    ActivityAnnoucementsPage,
    AddAnnoucementPage,
    SubcategoriesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    CategoriesPage,
    MenuPage,
    PortfolioPage,
    ChatsPage,
    ImagePage,
    ChatPage,
    ActivitiesPage,
    ProfessionalsPage,
    AnnoucementPage,
    AnnoucementsPage,
    ActivityTabsPage,
    ActivityAnnoucementsPage,
    AddAnnoucementPage,
    SubcategoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRestProvider
  ]
})
export class AppModule {}
