import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { MoviesDashboardService } from './movies-dashboard.service';

@Injectable()
export class MovieDetailsResolver implements Resolve<any>  {

  movieId: any;
  constructor( private movDashService: MoviesDashboardService ) { }

  resolve( route: ActivatedRouteSnapshot) {

    this.movieId =  route.paramMap.get('movieId');
    return this.movDashService.getMovieDetails( this.movieId );
  }
}
