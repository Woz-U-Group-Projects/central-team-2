import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [  {
  path: 'home',
  component: MainPageComponent
},
// {
//   path: 'login',
//   component: LoginPageComponent
// },
// {
//   path: 'trips',
//   component: TripsPageComponent
// },
// {
//   path: 'mytrips',
//   component: MyTripsPageComponent
// },
// {
//   path: 'pois',
//   component: POIsPageComponent
// },
// {
//   path: 'favorites',
//   component: FavoritesPageComponent
// },
// {
//   path: 'search',
//   component: SearchPageComponent
// },
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Adding in