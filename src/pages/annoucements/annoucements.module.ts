import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoucementsPage } from './annoucements';

@NgModule({
  declarations: [
    AnnoucementsPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoucementsPage),
  ],
})
export class AnnoucementsPageModule {}
