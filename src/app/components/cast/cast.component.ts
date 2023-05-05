import { Component, Input } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { fetchDataFromApi } from 'src/app/utils/api';

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent {
  @Input() cast !:any ;
  url !:any ;
  @Input() loading !:boolean ;

  constructor () {
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

}
