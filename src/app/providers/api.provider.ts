import {Injectable} from '@angular/core';

@Injectable()
export class ApiProvider {
    private baseUrl = 'https://pokeapi.co/api/v2';

    pokemonList(offset = 0, limit = 20): Promise<any> {
        return fetch(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });
    }

    /**
     * TODO: This is a poor man's search endpoint. Implement a fuzzy search feature by
     * loading all the pokemons and searching in memory.
     */
    findPokemon(name = '') {
        return fetch(`${this.baseUrl}/pokemon/${name}`)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch(err => {
                // TODO: handle error. if 404 it doesn't return proper JSON data
                // Instead it returns text "Not Found"
                return { error: true };
            });
    }
}
