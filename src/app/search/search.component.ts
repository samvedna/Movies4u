import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchSubscription: Subscription;

  searchValue = '';

  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2) { }

  ngOnInit() {
    this.getRouteQueryParams();
  }

// route to fetch the movies as per the search criteria
  searchMovies(searchVal) {
     this.router.navigate(
    ['.'],
    {
      relativeTo: this.route,
      queryParams:  { q: searchVal },
      queryParamsHandling: 'merge'
    });

  }

  // method to retrieve the search param from the url and populate the search bar
  getRouteQueryParams() {
    this.searchSubscription = this.route.queryParams.pipe(
      map(data => {
        const textValue = data && data.q || '';
        this.searchValue = textValue;
      })
    ).subscribe();
  }

  // unsubscribe to the subscriptions
  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

}
