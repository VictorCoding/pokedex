import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'pokemon',
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button (click)="handleClick()"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            pokemon
        </ion-content>
    `
})
export class PokemonPage {
    constructor(
        private navCtrl: NavController,
    ) {}
    handleClick() {
        this.navCtrl.navigateBack('tabs/tab1');
    }
}
