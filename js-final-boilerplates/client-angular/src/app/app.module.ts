import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NavigationBarComponent } from './navigation-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [AppComponent, NavigationBarComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}