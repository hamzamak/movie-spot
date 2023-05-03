import { Component } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent {
  faEye = faEye ;
  faEyeHide = faEyeSlash
  nbSlice : number = 5 ;
  items !: any;
  url !: any ;
  endpoint : string = "day";
  loading : boolean = false ;
  genres !:any ;
  constructor(private movieService: MovieService) {
    this.loading = true ;
    movieService.getTrendingMovies(this.endpoint).then((data) => { 
      this.loading = true ;
      this.items = data?.results;     
      this.url = movieService.url?.poster;  
      this.loading = false ;  
    });

    movieService.genresCall().then((data) => { 
      this.genres = data
    });
  
  }


  onEndpointChanged(endpoint: string) {
    this.endpoint = endpoint;
    // handle the updated endpoint value here
    this.loading = true ;
    this.movieService.getTrendingMovies(this.endpoint).then((data) => { 
   
      this.items = data?.results;     
      this.loading = false ;      
    });
  }
  
  showMoreMovies () {
    try {
      
      this.nbSlice = this.items?.length
    } catch (error) {
      this.nbSlice = 5 
    }
   
  }

  showLessMovies () {
    try {
      this.nbSlice = 5
    } catch (error) {
      
    }
  }
}
