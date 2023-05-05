import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  loading!: boolean;

  constructor(private route: ActivatedRoute, private movieService: MovieService,private router: Router ) { }

  ngOnInit(): void {
    this.loading = true ; 

    // this.route.paramMap.subscribe(params => {
    //   this.cardImage = history.state.item.cardImage;
    //   this.id = history.state.item.id
    //   this.media_type = history.state.item.media_type
    //   this.movieService.getDetailMovie(this.id, this.media_type).then((data) => { 
    //     this.item = data
    //   });
  
    //   this.movieService.getMovieCredits(this.id, this.media_type).then((data) => { 
    //     this.credits = data
    //   });

    //   this.movieService.getSimilarMovies(this.id , this.media_type).then((data) => { 
    //     this.similarMovies = data?.results;     
          
    //   });
    //   this.movieService.getRecommandationMovies(this.id , this.media_type).then((data) => { 
    //   this.recommendedMovies = data?.results;     
    // });
    // });
    
    this.loading = false ;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });

  }
}