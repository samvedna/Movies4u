import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId: any;
  movieDetailsObj: any;
  moviesImagePath: string;
  movieDuration: string;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.moviesImagePath =  'https://image.tmdb.org/t/p/w185';
    this.route.data.pipe(
      map( data => {
        this.movieDetailsObj = data.moviesDetailsObj;
      })
     ).subscribe(res => console.log(res, this.movieDetailsObj));

    //this.movieId = this.route.snapshot.paramMap.get('movieId');
    this.calculateMovieDurationInHours();
  }

  calculateMovieDurationInHours() {
    this.movieDuration = `${Math.floor(this.movieDetailsObj.runtime / 60)} h ${this.movieDetailsObj.runtime % 60} min`;
  }

  backToDashboard() {
    this.router.navigate( ['/']);
  }
}
