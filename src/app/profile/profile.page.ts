import {Component, OnInit} from '@angular/core';
import { Storage } from '../utils';

const usernameStorage = new Storage('username');
const wishListStorage = new Storage('wishlist');
const caughtStorage = new Storage('caught');

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
          <!-- TODO: add ability to take picture -->
          <ion-avatar>
            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
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
          <ion-item *ngFor="let pokemon of caught">
            {{pokemon}}
          </ion-item>
        </ion-list>
      </ng-container>
      <ng-container *ngIf="selectedSegment === 'wishlist'">
        <ion-list>
          <ion-item *ngFor="let pokemon of wishList">
            {{pokemon}}
          </ion-item>
        </ion-list>
      </ng-container>
    </ion-content>
  `,
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  userName = '';
  selectedSegment = 'caught';
  wishList = [];
  caught = [];

  constructor() {}

  ngOnInit() {
    this.userName = usernameStorage.get();
    this.loadWishList();
    this.loadCaught();
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
}
