import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HandtrackerComponent } from "./handtracker/handtracker.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HandtrackerComponent,
    BrowseMoviesComponent,
    FavoriteMoviesComponent,
  
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
