import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PokemonCardComponent} from './pokemon-card/pokemon-card.component';
import {PokemonPage} from './pokemon/pokemon.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        PokemonCardComponent,
        PokemonPage,
    ],
    exports: [
        PokemonCardComponent,
        PokemonPage,
    ]
})
export class CommonComponentsModule {}
