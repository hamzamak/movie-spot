import { Component, Input } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-details-banner',
  templateUrl: './details-banner.component.html',
  styleUrls: ['./details-banner.component.scss']
})
export class DetailsBannerComponent {
  @Input() cardImage !: string;
  @Input() itemDetail !: any;
  //showAllGenres:boolean = true;
  @Input() credits: any;
  @Input() loading !:boolean ;
  constructor() { }

  formatDate(date: string, output: string): string {
    const new_date = dayjs(date);
    try {
      const formattedDate = new_date.format(output);
      return formattedDate
    } catch (error) {
      return '????'
    }
  }

  strockColor(vote: number): string {
    if (vote >= 0 && vote <= 4)
      return "#ff0000"; //red
    else if (vote > 4 && vote <= 7) {
      return "#f89e00" //orange
    }
    else return "#4caf50"; // green
  }

  toHoursAndMinutes = (totalMinutes: number): string => {
    if(!totalMinutes) return "Unknown";
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  getDirectors() {
    return this.credits?.crew?.filter((f:any) => f.job === "Director");
  }
  getWriters() {
    return this.credits?.crew?.filter( (f:any) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");
  }

}