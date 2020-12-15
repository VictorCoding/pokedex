import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { ProfilePageRoutingModule } from './profile-routing.module';
import {PicturePage} from './picture/picture.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    PicturePage,
    ProfilePage,
  ]
})
export class ProfilePageModule {}
