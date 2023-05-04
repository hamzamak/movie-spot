import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-switch-tab',
  templateUrl: './switch-tab.component.html',
  styleUrls: ['./switch-tab.component.scss']
})
export class SwitchTabComponent {
  @Input() tabs !: string[] ;
  @Input() endpoint !: string ;
  @Output() endpointChanged = new EventEmitter<string>();
  switchActiveDay : boolean = true ;
  constructor(private movieService: MovieService) { }

  filter (option : string) {
    if(option === "day") {
      this.switchActiveDay = true;
      this.endpoint = "day";
    }
    else if(option === "week")  {
      this.switchActiveDay = false;
      this.endpoint = "week";  
    }
    else if(option === "tv") {
      this.switchActiveDay = false;
      this.endpoint = "tv";
    }
    else if(option === "movie")  {
      this.switchActiveDay = true;
      this.endpoint = "movie";  
    }

    this.endpointChanged.emit(this.endpoint); // emit the event with the new endpoint value
  

  }
}
