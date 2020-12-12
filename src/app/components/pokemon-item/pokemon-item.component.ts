import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import analyze from 'rgbaster';

@Component({
    selector: 'pokemon-item',
    styleUrls: ['./pokemon-item.scss'],
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
export class PokemonItemComponent implements OnInit{
    @Input()
    pokemon?;
    @Input()
    hasData = false;

    @ViewChild('imageHolder')
    imageHolder: ElementRef<HTMLDivElement>;
    @ViewChild('mainContainer')
    mainContainer: ElementRef<HTMLDivElement>;

    ngOnInit() {
        if (this.hasData) {
            this.setupCard(this.pokemon);
        } else {
            fetch(`${this.pokemon.url}`)
                .then(res => res.json())
                .then(res => {
                    this.setupCard(res);
                })
                .catch(err => {
                    // TODO: handle error
                    console.log('err', err);
                });
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
