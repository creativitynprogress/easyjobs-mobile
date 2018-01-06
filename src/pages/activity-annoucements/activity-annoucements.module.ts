import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityAnnoucementsPage } from './activity-annoucements';

@NgModule({
  declarations: [
    ActivityAnnoucementsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityAnnoucementsPage),
  ],
})
export class ActivityAnnoucementsPageModule {}
