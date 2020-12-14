import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ApiProvider} from '../../providers/api.provider';

@Component({
    selector: 'pokemon',
    styleUrls: [`./pokemon.page.scss`],
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button (click)="handleClick()"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-card>
                <ion-card-header>
                    <ion-img [src]="pokemon?.sprites.other['official-artwork'].front_default"></ion-img>
                    <ion-card-title>{{pokemon?.name}}</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <ion-badge *ngFor="let type of pokemon?.types" [className]="type.type.name">
                        {{type.type.name}}
                    </ion-badge>
                </ion-card-content>
            </ion-card>
            <ion-segment (ionChange)="segmentChanged($event)" value="stats">
                <ion-segment-button value="stats">
                    <ion-label>Stats</ion-label>
                </ion-segment-button>
                <ion-segment-button value="moves">
                    <ion-label>Moves</ion-label>
                </ion-segment-button>
            </ion-segment>
            <ng-container *ngIf="selectedSegment === 'stats'">
                <div class="stat-container">
                    <div class="stat-name">
                        <div *ngFor="let stat of pokemon?.stats">
                            {{stat.stat.name}}
                        </div>
                    </div>
                    <div class="stat-value">
                        <div *ngFor="let stat of pokemon?.stats">
                            <ion-progress-bar [value]="stat.base_stat / 100"></ion-progress-bar>
                        </div>
                    </div>
                </div>
            </ng-container>
            <ng-container *ngIf="selectedSegment === 'moves'">
                <ion-list>
                    <ion-item *ngFor="let move of pokemon?.moves">
                        {{move.move.name}}
                    </ion-item>
                </ion-list>
            </ng-container>
        </ion-content>
    `
})
export class PokemonPage implements OnInit, OnDestroy {
    paramsSubscription: Subscription;
    // TODO: add interface
    pokemon;
    selectedSegment = 'stats';

    constructor(
        private navCtrl: NavController,
        private route: ActivatedRoute,
        private apiProvider: ApiProvider,
    ) {}

    ngOnInit() {
        this.loadPokemon();
    }

    loadPokemon() {
        // TODO: add piping
        this.paramsSubscription = this.route.queryParams.subscribe(params => {
            const name = params.name;
            this.apiProvider.getPokemon(name)
                .then(res => {
                    this.pokemon = res;
                });
        });
    }

    handleClick() {
        this.navCtrl.navigateBack('tabs/home');
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }

    segmentChanged(event: CustomEvent) {
        this.selectedSegment = event.detail.value;
    }
}
