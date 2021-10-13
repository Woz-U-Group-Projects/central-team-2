import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationBarComponent } from './navigation-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { TripsComponent } from './trips/trips.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import { POIsComponent } from './pois/pois.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, MainPageComponent, LoginComponent, TripsComponent, MytripsComponent, POIsComponent, FavoritesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}