import {Injectable} from '@angular/core';

@Injectable()
export class ApiProvider {
    private baseUrl = 'https://pokeapi.co/api/v2';

    /**
     * Returns a subset list of pokemons. Mainly used for pagination.
     */
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
     * Gets a single pokemon by name. It will hit a 404 if the name is wrong, incomplete or doesn't exist.
     */
    getPokemon(name = '') {
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

    /**
     * Fuzzy search of all pokemons using [].includes
     */
    findPokemon(name = '') {
        return new Promise(resolve => {
            fetch(`${this.baseUrl}/pokemon`)
                .then(res => res.json())
                .then(res => {
                    const {count: totalPokemon} = res;

                    fetch(`${this.baseUrl}/pokemon?limit=${totalPokemon}`)
                        .then(x => x.json())
                        .then(({results}) => {
                            const matches = results.filter(pokemon => {
                                return pokemon.name.includes(name);
                            });
                            resolve(matches);
                        });
                })
                .catch(err => {
                    // TODO: handle error. if 404 it doesn't return proper JSON data
                    // Instead it returns text "Not Found"
                    resolve( {error: true});
                });
        });
    }
}
