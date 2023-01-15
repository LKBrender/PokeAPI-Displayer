import { Component } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';

const pokeList = 'https://pokeapi.co/api/v2/pokemon?limit=151'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PokeAPI-Displayer';
}

(async () => {
  const api = new PokemonClient();

  await api
    .getPokemonByName("")
    .then((data) => console.log(data.name))
    .catch((error) => console.error(error));
})();



//loop to get pokemon & links into array
var i = 0;
var PokeArray =[];
if(i<=151){

}
