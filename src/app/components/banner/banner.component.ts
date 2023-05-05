import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() url !: any ;
  @Output() submitSearch = new EventEmitter<string> ();
  constructor(private movieService : MovieService ,private router : Router) {
    movieService.getUpComingMoviBackgroundImage().then((data) => {
      this.loading = true;
      this.bg_image = this.url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
      this.loading = false;
    });
    
    
  }

  onSubmit(input : string = "") {
    this.submitSearch.emit(input)
    // navigate  ????????????????????????
    if(input)
    this.router.navigateByUrl(`/search/${input}`)
  }
}
