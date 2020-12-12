import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {PokemonCardComponent} from '../components/pokemon-card/pokemon-card.component';
import {PokemonPage} from './pokemon/pokemon.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule
  ],
  declarations: [
    PokemonCardComponent,
    PokemonPage,
    Tab1Page,
  ]
})
export class Tab1PageModule {}
