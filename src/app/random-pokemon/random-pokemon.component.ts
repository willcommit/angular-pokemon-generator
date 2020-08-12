import { Component, OnInit } from '@angular/core';

import { IPokemon } from '../ipokemon'
import { PokemonService } from '../pokemon/pokemon.service'

@Component({
  selector: 'app-random-pokemon',
  templateUrl: './random-pokemon.component.html',
  styleUrls: ['./random-pokemon.component.css']
})
export class RandomPokemonComponent implements OnInit {

  pokemon: IPokemon;
  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemonData().subscribe((data) => this.pokemon = data)
  }
}
