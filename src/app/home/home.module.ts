import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PokemonCardComponent} from '../components/pokemon-card/pokemon-card.component';
import {PokemonPage} from '../components/pokemon/pokemon.page';
import {CommonComponentsModule} from '../components/common-components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
      CommonComponentsModule,
  ],
  declarations: [
    HomePage,
  ]
})
export class HomePageModule {}
