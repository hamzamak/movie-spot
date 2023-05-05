import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  instagram  = faInstagram
  Facebook= faFacebook
  Twitter =faTwitter
  Linkedin = faLinkedin
}
