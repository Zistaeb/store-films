import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { ScreenComponent } from './components/screen/screen.component';
import { FilmComponent } from './components/film/film.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    ScreenComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
