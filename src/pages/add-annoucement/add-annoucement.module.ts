import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAnnoucementPage } from './add-annoucement';

@NgModule({
  declarations: [
    AddAnnoucementPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAnnoucementPage),
  ],
})
export class AddAnnoucementPageModule {}
