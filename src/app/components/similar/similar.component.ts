import { Component ,Input,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss']
})
export class SimilarComponent implements OnInit {
  faEye = faEye ;
  faEyeHide = faEyeSlash
  nbSlice : number = 5 ;
 @Input() items !: any;
  url !: any ;
  @Input() loading !:boolean ;
  genres !:any ;
  media_type : any;
  endpoint !: string ;
  title ! : string ;
 
  constructor(private movieService: MovieService , private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.media_type = this.router.snapshot.params['mediaType'];
    this.endpoint = this.router.snapshot.params['mediaType'];
    this.title = this.media_type === "tv" ? "Similar TV Shows" : "Similar Movies";
    fetchDataFromApi("/configuration").then((res) => {
      const url  = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
      };
      this.url = url ;
      return url ;
  });

    this.movieService.genresCall().then((data) => { 
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
