import { Component } from '@angular/core';
import { Film } from '../models/film.model';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent {
  films: Film[] = [];
}
