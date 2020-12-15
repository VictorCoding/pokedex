import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { ProfilePageRoutingModule } from './profile-routing.module';
import {PicturePage} from './picture/picture.page';
import {PokemonListItemComponent} from './pokemon-list-item/pokemon-list-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule
  ],
  declarations: [
    PicturePage,
    PokemonListItemComponent,
    ProfilePage,
  ]
})
export class ProfilePageModule {}
