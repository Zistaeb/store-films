import { Component } from '@angular/core';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})

export class FilmComponent {

  film: Film = {
    name: '',
    director: '',
    year: 0,
    image: '',
    price: 0,
  }

  constructor() {}

}
