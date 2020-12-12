import {Component, OnInit} from '@angular/core';
import {ApiProvider} from '../providers/api.provider';

@Component({
  selector: 'app-tab1',
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
      <ion-searchbar (ionChange)="doSearch($event)"></ion-searchbar>
      <ion-list class="pokemon-list">
        <pokemon-card *ngFor="let pokemon of pokemons" [pokemon]="pokemon"></pokemon-card>
      </ion-list>
      <ion-infinite-scroll threshold="100px" (ionInfinite)="loadMorePokemon($event)">
        <ion-infinite-scroll-content
            loadingSpinner="bubbles"
            loadingText="Loading more pokemons...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  `,
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  pokemons = [];

  constructor(
      private apiProvider: ApiProvider
  ) {}

  ngOnInit() {
    this.loadPokemon();
  }

  async loadPokemon() {
    const { results } = await this.apiProvider.pokemonList();
    this.pokemons = results;
  }

  async loadMorePokemon(event) {
    const offset = this.pokemons.length;
    const { results } = await this.apiProvider.pokemonList(offset);
    this.pokemons.push(...results);
    event.target.complete();
  }

  doSearch(event: CustomEvent) {
    const pokemonName = event.detail.value;

    if (pokemonName === '') {
      this.loadPokemon();
      return;
    }

    this.apiProvider.findPokemon(pokemonName).then(res => {
      if (res.error) {
        this.pokemons = [];
        return;
      }

      this.pokemons = [res];
    });
  }
}
