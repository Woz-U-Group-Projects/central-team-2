import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { TripsComponent } from './trips/trips.component';
import { MytripsComponent } from './mytrips/mytrips.component';
import { POIsComponent } from './pois/pois.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [  {
  path: 'home',
  component: MainPageComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'trips',
  component: TripsComponent
},
{
  path: 'mytrips',
  component: MytripsComponent
},
{
  path: 'pois',
  component: POIsComponent
},
{
  path: 'favorites',
  component: FavoritesComponent
},
// {
//   path: 'search',
//   component: SearchComponent
// },
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Adding in