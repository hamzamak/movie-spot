import { Component,Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  bg_image !: string;
  loading !: boolean;

  constructor(private movieService : MovieService) {
    movieService.getUpComingMoviBackgroundImage().then((data) => {
      this.loading = true;
      this.bg_image = movieService.url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
      this.loading = false;
    });
    
    
  }
}
