import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnnoucementPage } from './annoucement';

@NgModule({
  declarations: [
    AnnoucementPage,
  ],
  imports: [
    IonicPageModule.forChild(AnnoucementPage),
  ],
})
export class AnnoucementPageModule {}
