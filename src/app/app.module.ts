import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { StarRatingComponent } from './star-rating/star-rating.component';
// import { RatingModule } from 'ng-starrating';
import { RatingModule } from '@khajegan/ng-starrating';
import { RatingComponent } from './rating/rating.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, RatingComponent, SearchComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
