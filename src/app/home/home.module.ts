import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {PokemonCardComponent} from '../components/pokemon-card/pokemon-card.component';
import {PokemonPage} from './pokemon/pokemon.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [
    PokemonCardComponent,
    PokemonPage,
    HomePage,
  ]
})
export class HomePageModule {}
