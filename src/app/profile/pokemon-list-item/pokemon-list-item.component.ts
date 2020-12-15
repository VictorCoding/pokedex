import {Component, Input, OnInit} from '@angular/core';
import {ApiProvider} from '../../providers/api.provider';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'pokemon-list-item',
    template: `
        <ion-item (click)="viewPokemon()">
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
        private navCtrl: NavController,
    ) {}

    ngOnInit() {
        this.apiProvider.getPokemon(this.pokemonName)
            .subscribe(res => {
                this.imageUrl = res.sprites.other['official-artwork']['front_default'];
            });
    }

    viewPokemon() {
        this.navCtrl.navigateForward('tabs/profile/pokemon', {
            queryParams: {
                name: this.pokemonName,
            }
        });
    }
}
