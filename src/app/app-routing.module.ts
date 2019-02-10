import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver } from './services/movie-details-resolver.service';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/movies-dashboard', pathMatch: 'full'
  },
  {
    path: 'movies-dashboard',
    children: [
      {
        path: '',
        component: HeaderComponent,
        outlet: 'header'
        },
        {
          path: '',
          component: MoviesDashboardComponent
        }
     ]
   },
  {
    path: 'movies-details/:movieId',
    component: MovieDetailsComponent,
    // fetch the data via resolver before movie-details renders
    resolve: {
      moviesDetailsObj : MovieDetailsResolver
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
