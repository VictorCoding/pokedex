import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NavController, ToastController} from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { StorageUtil } from '../../utils';

const profileStorage = new StorageUtil('profile');

@Component({
    selector: 'picture',
    styleUrls: ['./picture.page.scss'],
    template: `
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button (click)="handleClick()"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="preview-container">
                <canvas #canvas></canvas>
                <video #video autoplay playsinline muted *ngIf="!imagePreview"></video>
                <img *ngIf="imagePreview" [src]="imagePreview">
            </div>
            <div class="actions-container">
                <ion-button (click)="takePicture()" *ngIf="!imagePreview">
                    Say Cheese!
                </ion-button>
                <ion-button (click)="initCamera()" *ngIf="imagePreview">
                    Retake
                </ion-button>
                <ion-button color="success" (click)="save()" *ngIf="imagePreview">
                    Keep
                </ion-button>
            </div>
            <div class="profile-picture-container">
                <ion-label>
                    Current Picture
                </ion-label>
                <img [src]="currentPicture" *ngIf="currentPicture">
                <ion-icon name="image" *ngIf="!currentPicture"></ion-icon>
            </div>
        </ion-content>
    `
})
export class PicturePage implements OnInit {
    @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
    @ViewChild('video') video: ElementRef<HTMLVideoElement>;

    imagePreview = '';
    currentPicture = '';

    constructor(
        private navCtrl: NavController,
        private toastCtrl: ToastController,
        private sanitizer: DomSanitizer,
    ) {}

    ngOnInit() {
        this.initCamera();
        this.loadCurrentPicture();
    }

    ionViewWillLeave() {
        this.stopStream();
    }

    async initCamera() {
        this.imagePreview = '';

        if ('mediaDevices' in navigator && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    width: 200,
                    height: 200,
                },
            });
            this.video.nativeElement.srcObject = stream;
        } else {
            const toast = await this.toastCtrl.create({
                message: 'Camera not supported :(',
                duration: 3000,
            });
            await toast.present();
        }
    }

    handleClick() {
        this.navCtrl.navigateBack('tabs/profile');
    }

    takePicture() {
        const video = this.video.nativeElement;
        const width = 200;
        const height = 200;
        const canvas = this.canvas.nativeElement;
        canvas.height = height;
        canvas.width = width;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            video,
            0,
            0,
            width,
            height
        );
        const base64 = canvas.toDataURL();
        this.imagePreview = this.sanitizer.bypassSecurityTrustUrl(base64);
    }

    loadCurrentPicture() {
        this.currentPicture = profileStorage.get() || '';
    }

    save() {
        this.currentPicture = this.imagePreview;
        profileStorage.set(this.canvas.nativeElement.toDataURL());
    }

    stopStream() {
        const stream = this.video.nativeElement.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => track.stop());

        this.video.nativeElement.srcObject = null;
    }
}
