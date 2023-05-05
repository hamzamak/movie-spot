import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item: any;
  cardImage: any;
  id : any;
  media_type : any;
  credits!: any;
  similarMovies !: any;
  recommendedMovies!:any;
  loading : boolean = false;
  url!: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService,private router: Router ) {   }

  ngOnInit(): void {
    this.loading = true ; 
   
    this.route.paramMap.subscribe(params  => {
     
      this.id = history.state.item?.id || params.get('id');
      this.media_type = history.state.item?.media_type  || params.get('mediaType');

      fetchDataFromApi("/configuration").then((res) => {
        const url  = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url   +   "original",
            profile: res.images.secure_base_url  +  "original",
        };
        this.url = url ;
    });

      this.movieService.getDetailMovie(this.id, this.media_type).then((data) => { 
      this.item = data
      this.cardImage = this.url?.poster + data?.poster_path;
      });
  
      this.movieService.getMovieCredits(this.id, this.media_type).then((data) => { 
        this.credits = data
      });

      this.movieService.getSimilarMovies(this.id , this.media_type).then((data) => { 
        this.similarMovies = data?.results;     
          
      });
      this.movieService.getRecommandationMovies(this.id , this.media_type).then((data) => { 
      this.recommendedMovies = data?.results;     
    });
    });
    
    this.loading = false ;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0);
      }
    });

  }
}