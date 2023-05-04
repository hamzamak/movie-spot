import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-banner',
  templateUrl: './details-banner.component.html',
  styleUrls: ['./details-banner.component.scss']
})
export class DetailsBannerComponent {
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