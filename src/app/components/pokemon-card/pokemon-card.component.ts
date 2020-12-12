import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import analyze from 'rgbaster';
import {NavController} from '@ionic/angular';
import {ApiProvider} from '../../providers/api.provider';

@Component({
    selector: 'pokemon-card',
    styleUrls: ['./pokemon-card.scss'],
    template: `
        <!-- TODO: add a loading image -->
        <div class="main-container" #mainContainer>
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
            'tabs/tab1/pokemon',
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
}
