import {Component, Input, OnInit} from '@angular/core';
import {ApiProvider} from '../../providers/api.provider';

@Component({
    selector: 'pokemon-list-item',
    template: `
        <ion-item>
            <ion-thumbnail *ngIf="imageUrl">
                <img [src]="imageUrl">
            </ion-thumbnail>
            <ion-label>{{pokemonName}}</ion-label>
        </ion-item>
    `
})
export class PokemonListItemComponent implements OnInit {
    @Input()
    pokemonName = '';

    imageUrl = '';

    constructor(
        private apiProvider: ApiProvider,
    ) {}

    ngOnInit() {
        this.apiProvider.getPokemon(this.pokemonName)
            .then(res => {
                this.imageUrl = res.sprites.other['official-artwork']['front_default'];
            });
    }
}
