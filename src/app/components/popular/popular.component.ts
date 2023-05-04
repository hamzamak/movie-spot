import { Component } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent {
  faEye = faEye ;
  faEyeHide = faEyeSlash
  nbSlice : number = 5 ;
  items !: any;
  url !: any ;
  endpoint : string = "movie";
  loading : boolean = false ;
  genres !:any ;
  constructor(private movieService: MovieService) {
    this.loading = true ;
    movieService.getTopRatedMovies(this.endpoint , 'popular').then((data) => { 
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
    this.loading = true ;
    this.movieService.getTopRatedMovies(this.endpoint , 'popular').then((data) => {  
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
