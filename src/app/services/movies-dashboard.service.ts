import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable()

export class MoviesDashboardService {
    constructor( private http: HttpClient, private route: ActivatedRoute) { }

    getAllMovies(query: string = null) {
        let target = 'discover';
        let queryString = '';
        if (query) {
            target = 'search';
            queryString = `&query=${query}`;
        }

        const url = 'https://api.themoviedb.org/3/' + `${target}` + '/movie'
            + '?api_key=6ed12e064b90ae1290fa326ce9e790ff'
            + '&language=en-US'
            + '&sort_by=popularity.desc'
            + '&include_adult=false'
            + '&include_video=false'
            + '&page=1'
            + `${queryString}`;

        return this.http.get(url);
    }

    getMovieDetails(movieId: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6ed12e064b90ae1290fa326ce9e790ff&language=en-US`);
    }
}
