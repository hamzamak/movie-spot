import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent {
  @Input () genres !: any ;
  @Input () genreIds !: any ;
  nbSlice : number = 2 ;

}
