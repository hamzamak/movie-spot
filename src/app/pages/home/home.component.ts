import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  url !: any ;
  searchState !: string ;
  constructor(private movieService: MovieService) {
    fetchDataFromApi("/configuration").then((res) => {
      const url  = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "original",
      };
      this.url = url ;
      return url ;
  });
  }

  onSearchMovies (text : string){
    this.searchState = text;
    console.log(text)
  }
}
