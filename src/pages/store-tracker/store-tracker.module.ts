import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreTrackerPage } from './store-tracker';

@NgModule({
  declarations: [
    StoreTrackerPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreTrackerPage),
  ],
})
export class StoreTrackerPageModule {}
