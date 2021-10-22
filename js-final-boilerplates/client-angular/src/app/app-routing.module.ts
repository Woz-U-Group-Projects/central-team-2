import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponent } from './components/login/login.component';
import { TripsComponent } from './components/trips/trips.component';
import { MytripsComponent } from './components/mytrips/mytrips.component';
import { POIsComponent } from './components/pois/pois.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { SignupComponent } from './components/signup/signup.component';
import { BuildATripComponent } from './components/build-atrip/build-atrip.component';
import { KeweenawComponent } from './components/keweenaw/keweenaw.component';

import { TaskDisplayComponent } from '../app/task-display/task-display.component';

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
{
  path: 'signup',
  component: SignupComponent 
},
{
  path: 'search',
  component: TaskDisplayComponent
},
{
  path: 'build-atrip',
  component: BuildATripComponent
},
{
  path: 'keweenaw',
  component: KeweenawComponent
},
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