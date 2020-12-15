import {Component} from '@angular/core';
import { StorageUtil } from '../utils';
import {NavController} from '@ionic/angular';

const usernameStorage = new StorageUtil('username');
const wishListStorage = new StorageUtil('wishlist');
const caughtStorage = new StorageUtil('caught');
const profileStorage = new StorageUtil('profile');

@Component({
  selector: 'profile',
  template: `
    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-title>
          Profile
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content [fullscreen]="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-avatar (click)="takeMeToPicture()">
            <img *ngIf="!profilePicture" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
            <img *ngIf="profilePicture" [src]="profilePicture">
          </ion-avatar>
          <ion-input placeholder="Your name..." (ionChange)="handleNameChange($event)" [value]="userName"></ion-input>
        </ion-toolbar>
      </ion-header>
      <ion-segment (ionChange)="segmentChanged($event)" value="caught">
        <ion-segment-button value="caught">
          <ion-label>Caught</ion-label>
        </ion-segment-button>
        <ion-segment-button value="wishlist">
          <ion-label>Wish List</ion-label>
        </ion-segment-button>
      </ion-segment>
      <ng-container *ngIf="selectedSegment === 'caught'">
        <ion-list>
            <pokemon-list-item *ngFor="let pokemon of caught" [pokemonName]="pokemon"></pokemon-list-item>
        </ion-list>
      </ng-container>
      <ng-container *ngIf="selectedSegment === 'wishlist'">
        <ion-list>
          <pokemon-list-item *ngFor="let pokemon of wishList" [pokemonName]="pokemon"></pokemon-list-item>
        </ion-list>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  userName = '';
  selectedSegment = 'caught';
  wishList = [];
  caught = [];
  profilePicture = '';

  constructor(
      private navCtrl: NavController,
  ) {}

  ionViewDidEnter() {
    this.userName = usernameStorage.get() || '';
    this.loadWishList();
    this.loadCaught();
    this.loadProfilePicture();
  }

  handleNameChange(event: CustomEvent) {
    usernameStorage.set(event.detail.value);
  }

  segmentChanged(event: CustomEvent) {
    this.selectedSegment = event.detail.value;
  }

  loadWishList() {
    this.wishList = wishListStorage.get(true) || [];
  }

  loadCaught() {
    this.caught = caughtStorage.get(true) || [];
  }

  takeMeToPicture() {
    this.navCtrl.navigateForward('tabs/profile/picture');
  }

  loadProfilePicture() {
    this.profilePicture = profileStorage.get() || '';
  }
}
