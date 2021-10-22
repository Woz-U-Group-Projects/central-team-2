import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationBarComponent } from './components/navigation-bar/nav-bar.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { TripsComponent } from './components/trips/trips.component';
import { MytripsComponent } from './components/mytrips/mytrips.component';
import { POIsComponent } from './components/pois/pois.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateAccountComponent } from './components/signup/create-account.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskDisplayComponent } from "./task-display/task-display.component";
import { TripBuildsComponent } from './components/trip-builds/trip-builds.component';
import { BuildATripComponent } from './components/build-atrip/build-atrip.component';
import { HighlightedTripComponent } from './components/highlighted-trip/highlighted-trip.component';
import { KeweenawComponent } from './components/keweenaw/keweenaw.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [AppComponent, NavigationBarComponent,TaskDisplayComponent, MainPageComponent, SignupComponent, LoginComponent,  TripsComponent, MytripsComponent, POIsComponent, FavoritesComponent, CreateAccountComponent, TripBuildsComponent, BuildATripComponent, HighlightedTripComponent, KeweenawComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}