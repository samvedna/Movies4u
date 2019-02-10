import { Component, OnInit , OnDestroy} from '@angular/core';
import { MoviesDashboardService } from '../services/movies-dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.scss']
})
export class MoviesDashboardComponent implements OnInit, OnDestroy {
  allMoviesObj: Array<any>;
  allMovies: any;
  moviesImagePath: string;
  dashboardSubscription: Subscription;

  constructor(private moviesDashboardService: MoviesDashboardService, private router: Router, private route: ActivatedRoute) {
    this.moviesImagePath = 'https://image.tmdb.org/t/p/w185';
   }

  ngOnInit() {
    this.listenToQueryParams();
  }

 // listen to the changes in the query param in the route and fetch movies
  listenToQueryParams() {
    this.route.queryParams.pipe(
      map(data => {
        if (data && data.q) {
          // search query
          this.getMoviesList(data.q);
        } else {
          // without search
          this.getMoviesList();
        }
      })
    ).subscribe();
  }

   // fetch Movies list for the searched movie name. Function fetches all movies by default
  getMoviesList(q: string = null) {
    //  unsubscribe to an ongoing subscription
    if (this.dashboardSubscription) { this.dashboardSubscription.unsubscribe(); }
    this.dashboardSubscription = this.moviesDashboardService.getAllMovies(q).pipe(
      map((data: any) => {
        this.allMoviesObj = data && data.results || [];
      }),
      catchError(
        err => {
          this.allMoviesObj = [];
          return of(false);
        }
      )
    ).subscribe();
  }

  // navigate to movie details page when a movie is selected
  navigateToMovieDetails(movieId: number) {
    this.router.navigate( ['/movies-details', movieId]);
  }

  // unsubscribing the subscriptions once the component destroys
  ngOnDestroy() {
    this.dashboardSubscription.unsubscribe();
    }

}

