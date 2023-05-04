import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent {
  @Input() cardImage !: string  ;
  @Input() item !: any;
  @Input() loading !: boolean;
  @Input () genres !: any ;

  strockColor(vote : number) : string {
    if(vote >=0 && vote <= 4)
    return "#ff0000" ; //red
    else if ( vote > 4 && vote <= 7 ) {
      return "#f89e00" //orange
    }
    else return "#4caf50"; // green
  }

 
}
