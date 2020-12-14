import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import analyze from 'rgbaster';
import {NavController} from '@ionic/angular';
import {ApiProvider} from '../../providers/api.provider';
import { Storage } from '../../utils';

const wishlistStorage = new Storage('wishlist');
const caughtStorage = new Storage('caught');

@Component({
    selector: 'pokemon-card',
    styleUrls: ['./pokemon-card.scss'],
    template: `
        <!-- TODO: add a loading image -->
        <div class="main-container" #mainContainer>
            <!-- TODO: create custom icon component so that star turns yellow when clicked -->
            <ion-icon (click)="addToWishList($event, pokemon.name)" name="star-outline"></ion-icon>
            <ion-icon (click)="addToCaught($event, pokemon.name)" name="add-circle-outline"></ion-icon>
            <div #imageHolder class="image-holder">
            </div>
            <div class="name-holder">
                {{pokemon.name}}
            </div>
        </div>
    `
})
export class PokemonCardComponent implements OnInit{
    // TODO: create interface
    @Input()
    pokemon?;

    @ViewChild('imageHolder')
    imageHolder: ElementRef<HTMLDivElement>;
    @ViewChild('mainContainer')
    mainContainer: ElementRef<HTMLDivElement>;

    @HostListener('click')
    handleCardClick() {
        this.navCtrl.navigateForward(
            'tabs/home/pokemon',
            {
                queryParams: {
                    name: this.pokemon.name,
                }
            },
        );
    }

    constructor(
        private navCtrl: NavController,
        private apiProvider: ApiProvider,
    ) {}

    ngOnInit() {
        this.loadPokemon();
    }

    loadPokemon() {
        if (this.pokemon.url) {
            this.apiProvider.findPokemon(this.pokemon.name)
                .then(res => this.setupCard(res));
        } else {
            this.setupCard(this.pokemon);
        }
    }

    setupCard(pokemon) {
        const { sprites } = pokemon;
        const pokemonImg = sprites.other['official-artwork'].front_default;
        const img = new Image();
        img.onload = async () => {
            const result = await analyze(sprites.front_default);
            // TODO: create util function to check if background color is white so that
            // we can change the text color to something else other than white so that it's visible
            const backgroundColor = result[0].color;
            this.mainContainer.nativeElement.style.backgroundColor = backgroundColor;
            this.imageHolder.nativeElement.appendChild(img);
        };
        img.src = pokemonImg;
    }

    addToWishList(event: MouseEvent, pokemonName: string) {
        event.stopPropagation();
        const wishList = wishlistStorage.get(true) || [];
        wishList.push(pokemonName);
        wishlistStorage.set(wishList, true);
    }

    addToCaught(even: MouseEvent, pokemonName: string) {
        event.stopPropagation();
        const caught = caughtStorage.get(true) || [];
        caught.push(pokemonName);
        caughtStorage.set(caught, true);
    }
}
