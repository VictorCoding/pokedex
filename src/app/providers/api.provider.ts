import {Injectable} from '@angular/core';
import {fromFetch} from 'rxjs/fetch';
import {catchError, map, flatMap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';

const extractResponse = (res: any): Observable<any> => {
    if (res.ok) {
        return res.json();
    } else {
        return throwError({ error: true });
    }
};

@Injectable()
export class ApiProvider {
    private baseUrl = 'https://pokeapi.co/api/v2';

    /**
     * Returns a subset list of pokemons. Mainly used for pagination.
     */
    pokemonList(offset = 0, limit = 20): Observable<any> {
        return fromFetch(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`)
            .pipe(
                flatMap(res => extractResponse(res)),
                catchError(() => {
                    return of({ error: true });
                })
            );
    }

    /**
     * Gets a single pokemon by name. It will hit a 404 if the name is wrong, incomplete or doesn't exist.
     */
    getPokemon(name: string): Observable<any> {
        return fromFetch(`${this.baseUrl}/pokemon/${name}`)
            .pipe(
                flatMap(res => extractResponse(res)),
                catchError(() => {
                    return of({ error: true });
                })
            );
    }

    /**
     * Fuzzy search of all pokemons using [].includes
     */
    findPokemon(name: string): Observable<any> {
        return fromFetch(`${this.baseUrl}/pokemon`)
            .pipe(
                flatMap(res => extractResponse(res)),
                map(res => res.count),
                flatMap(count => {
                    return fromFetch(`${this.baseUrl}/pokemon?limit=${count}`)
                        .pipe(
                            flatMap(res => extractResponse(res)),
                            flatMap(({ results }) => {
                                const matches = results.filter(pokemon => {
                                    return pokemon.name.includes(name);
                                });
                                return of(matches);
                            })
                        );
                }),
                catchError(() => {
                    return of({ error: true });
                })
            );
    }
}
