import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityTabsPage } from './activity-tabs';

@NgModule({
  declarations: [
    ActivityTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityTabsPage),
  ],
})
export class ActivityTabsPageModule {}
