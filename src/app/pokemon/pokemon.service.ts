import { Observable, pipe } from 'rxjs'

import { HttpClient } from '@angular/common/http'
import { IPokemon } from '../ipokemon'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { id_randomizer } from '../../utils/helpers';
import { map } from 'rxjs/operators'

interface IPokemonData {
  id: number,
  name: string,
  base_experience: number,
  sprites: {
    front_default: string,
    front_shiny: string
  }
}


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private httpClient: HttpClient) { }

  getPokemonData(): Observable<IPokemon> {

    const id = id_randomizer();

    return this.httpClient.get<IPokemonData>(
      `${environment.baseUrl}pokemon/${id}`)
      .pipe(map(data => this.transformToIPokemon(data)))
  }

  private transformToIPokemon(data: IPokemonData): IPokemon {
    return {
      id: data.id,
      name: data.name,
      base_experience: data.base_experience,
      sprite_default: data.sprites.front_default,
      sprite_shiny: data.sprites.front_shiny
    }
  }
}
