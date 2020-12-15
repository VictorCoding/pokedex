import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiProvider} from '../providers/api.provider';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'home',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          Pokemon
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Pokemon</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- TODO: make it sticky -->
      <ion-searchbar (ionChange)="doSearch($event)"></ion-searchbar>
      <ion-list class="pokemon-list">
        <pokemon-card *ngFor="let pokemon of pokemons" [pokemon]="pokemon"></pokemon-card>
      </ion-list>
      <ion-infinite-scroll [disabled]="searching" threshold="100px" (ionInfinite)="loadMorePokemon($event)">
        <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more pokemons...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  `,
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy  {
  pokemons = [];
  searching = false;
  private destroyed$: Subject<boolean> = new Subject();

  constructor(
      private apiProvider: ApiProvider
  ) {}

  ngOnInit() {
    this.loadPokemon();
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  loadPokemon() {
    this.apiProvider.pokemonList()
        .pipe(
            takeUntil(this.destroyed$),
        )
        .subscribe(({ results }) => {
          this.pokemons = results;
        });
  }

  async loadMorePokemon(event) {
    const offset = this.pokemons.length;
    this.apiProvider.pokemonList(offset)
        .pipe(
            takeUntil(this.destroyed$),
        ).subscribe(({ results }) => {
          this.pokemons.push(...results);
          event.target.complete();
        });
  }

  doSearch(event: CustomEvent) {
    this.searching = true;
    const pokemonName = event.detail.value;

    if (pokemonName === '') {
      this.searching = false;
      this.loadPokemon();
      return;
    }

    this.apiProvider.findPokemon(pokemonName)
        .pipe(
            takeUntil(this.destroyed$),
        ).subscribe(res => {
          if (res.error) {
            this.pokemons = [];
            return;
          }

          this.pokemons = res;
        });
  }
}
