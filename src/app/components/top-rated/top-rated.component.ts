import { Component, Input } from '@angular/core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {
  faEye = faEye ;
  faEyeHide = faEyeSlash
  nbSlice : number = 5 ;
  items !: any;
  @Input() url !: any ;
  endpoint : string = "movie";
  loading : boolean = false ;
  genres !:any ;
  constructor(private movieService: MovieService) {
    this.loading = true ;
    movieService.getTopRatedMovies(this.endpoint , 'top_rated').then((data) => { 
      this.loading = true ;
      this.items = data?.results;     
      this.loading = false ;  
    });

    movieService.genresCall().then((data) => { 
      this.genres = data
    });
  
  }


  onEndpointChanged(endpoint: string) {
    this.endpoint = endpoint;
    this.loading = true ;
    this.movieService.getTopRatedMovies(this.endpoint , 'top_rated').then((data) => {  
      this.items = data?.results;     
      this.loading = false ;      
    });
    this.loading = false ; 
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
