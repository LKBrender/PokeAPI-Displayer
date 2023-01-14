import { Component } from '@angular/core';
import { PokemonClient } from 'pokenode-ts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeAPI-Displayer';

  (async () => {
    const api = new PokemonClient();

    await api
      .getPokemonByName(`PokeList`)
      .then((data) => console.log(data.name))
      .catch((error) => console.error(error));
  })();
}
