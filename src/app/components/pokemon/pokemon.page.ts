import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {ApiProvider} from '../../providers/api.provider';
import { StorageUtil } from '../../utils';
import {flatMap, takeUntil} from 'rxjs/operators';

const wishlistStorage = new StorageUtil('wishlist');
const wishList = wishlistStorage.get(true) || [];
const caughtStorage = new StorageUtil('caught');
const caught = caughtStorage.get(true) || [];

@Component({
    selector: 'pokemon',
    styleUrls: [`./pokemon.page.scss`],
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
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
                    <div class="badges-container">
                        <div class="types-holder">
                            <ion-badge *ngFor="let type of pokemon?.types" [className]="type.type.name">
                                {{type.type.name}}
                            </ion-badge>
                        </div>
                        <div class="actions-holder">
                            <ion-badge [color]="isCaught ? 'success' : 'medium'" (click)="toggleCaught(pokemon.name)">
                                caught
                            </ion-badge>
                            <ion-badge [color]="inWishList ? 'success' : 'medium'" (click)="toggleWishList(pokemon.name)">
                                wish list
                            </ion-badge>
                        </div>
                    </div>
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
                            <ion-progress-bar [color]="statsColorMap[stat.stat.name]" [value]="stat.base_stat / 200"></ion-progress-bar>
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
    // TODO: add interface
    pokemon;
    selectedSegment = 'stats';
    isCaught = false;
    inWishList = false;
    statsColorMap = {
        hp: 'success',
        attack: 'danger',
        defense: 'primary',
        'special-attack': 'warning',
        'special-defense': 'secondary',
        speed: 'tertiary',
    };
    private destroyed$: Subject<boolean> = new Subject();

    constructor(
        private navCtrl: NavController,
        private route: ActivatedRoute,
        private apiProvider: ApiProvider,
    ) {}

    ngOnInit() {
        this.loadPokemon();
    }

    loadPokemon() {
        this.route.queryParams
            .pipe(
                flatMap(params => {
                    const name = params.name;

                    return this.apiProvider.getPokemon(name);
                }),
                takeUntil(this.destroyed$),
            ).subscribe(pokemon => {
                this.pokemon = pokemon;

                this.inWishList = wishList.filter(item => {
                    return item === pokemon.name;
                }).length > 0;
                this.isCaught = caught.filter(item => {
                    return item === pokemon.name;
                }).length > 0;
        });
    }

    handleClick() {
        this.navCtrl.navigateBack('tabs/home');
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }

    segmentChanged(event: CustomEvent) {
        this.selectedSegment = event.detail.value;
    }

    /**
     * Adds/removes a pokemon name from the wish list storage.
     */
    toggleWishList(pokemonName: string) {
        if (wishlistStorage.exists(pokemonName)) {
            const idx = wishList.findIndex(x => x === pokemonName);
            wishList.splice(idx, 1);
            this.inWishList = false;
        } else {
            this.inWishList = true;
            wishList.push(pokemonName);
        }

        wishlistStorage.set(wishList, true);
    }

    /**
     * Adds/removes a pokemon name from the caught list storage.
     */
    toggleCaught(pokemonName: string) {
        if (caughtStorage.exists(pokemonName)) {
            const idx = caught.findIndex(x => x === pokemonName);
            caught.splice(idx, 1);
            this.isCaught = false;
        } else {
            this.isCaught = true;
            caught.push(pokemonName);
        }

        caughtStorage.set(caught, true);
    }
}
