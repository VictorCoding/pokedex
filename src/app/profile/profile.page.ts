import {Component, OnInit} from '@angular/core';
import { Storage } from '../utils';

const storage = new Storage('userName');

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
    </ion-content>
  `,
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  userName = '';

  constructor() {}

  ngOnInit() {
    this.userName = storage.get();
  }

  handleNameChange(event: CustomEvent) {
    console.log(event.detail.value);
    storage.set(event.detail.value);
  }
}
