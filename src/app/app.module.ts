import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './components/banner/banner.component';
import { SwitchTabComponent } from './components/switch-tab/switch-tab.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { TrendingComponent } from './components/trending/trending.component';
import { GenreComponent } from './components/genre/genre.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PopularComponent } from './components/popular/popular.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { DetailsComponent } from './pages/details/details.component';
import { DetailsBannerComponent } from './components/details-banner/details-banner.component';
import { CastComponent } from './components/cast/cast.component';
import { SimilarComponent } from './components/similar/similar.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { FooterComponent } from './components/footer/footer.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SearchResultsComponent } from './pages/search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BannerComponent,
    SwitchTabComponent,
    CardMovieComponent,
    TrendingComponent,
    GenreComponent,
    PopularComponent,
    TopRatedComponent,
    DetailsComponent,
    DetailsBannerComponent,
    CastComponent,
    SimilarComponent,
    RecommendationComponent,
    FooterComponent,
    SearchResultsComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      showSubtitle : false
    }),
    NgxSkeletonLoaderModule.forRoot({
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
        height: '30px',
      },
    }),
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
