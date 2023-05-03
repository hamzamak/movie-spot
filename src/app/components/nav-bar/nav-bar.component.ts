import { Component } from '@angular/core';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  toogle!: boolean ;
  barIcon = faBars
  closeIcon = faXmark

  constructor(){
    this.toogle = false;
  }

  setToogleMenu () {
    this.toogle = !this.toogle;
  }
}