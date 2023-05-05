import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent {
  faEye = faEye ;
  faEyeHide = faEyeSlash
  nbSlice : number = 5 ;
  @Input() items !: any;
  url !: any ;
  @Input() loading !:boolean ;
  genres !:any ;
  media_type : any;
  id : any;
  endpoint !: string ;
 
  constructor(private movieService: MovieService , private router: ActivatedRoute) {
    this.media_type = this.router.snapshot.params['mediaType'];
    this.endpoint = this.router.snapshot.params['mediaType'];
    this.id = this.router.snapshot.params['id'];
    fetchDataFromApi("/configuration").then((res) => {
      const url  = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
      };
      this.url = url ;
      return url ;
  });

    // this.loading = true ;
    // movieService.getRecommandationMovies(this.id , this.media_type).then((data) => { 
    //   this.items = data?.results;     
    //   this.loading = false ;  
    // });

    movieService.genresCall().then((data) => { 
      this.genres = data
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
