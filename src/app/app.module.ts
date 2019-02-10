import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { MoviesDashboardService } from './services/movies-dashboard.service';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver } from './services/movie-details-resolver.service';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesDashboardComponent,
    MovieDetailsComponent,
    HeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    MoviesDashboardService,
    MovieDetailsResolver
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
