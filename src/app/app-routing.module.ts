import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//These are all the paths to the pages
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    loadChildren: () => import('./weather/weather.module').then( m => m.WeatherPageModule)
  },
  {
    path: 'ireland',
    loadChildren: () => import('./ireland/ireland.module').then( m => m.IrelandPageModule)
  },
  {
    path: 'england',
    loadChildren: () => import('./england/england.module').then( m => m.EnglandPageModule)
  },
  {
    path: 'spain',
    loadChildren: () => import('./spain/spain.module').then( m => m.SpainPageModule)
  },
  {
    path: 'france',
    loadChildren: () => import('./france/france.module').then( m => m.FrancePageModule)
  },
  {
    path: 'popovercomponent',
    loadChildren: () => import('./popovercomponent/popovercomponent.module').then( m => m.PopovercomponentPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then( m => m.MoviesPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
