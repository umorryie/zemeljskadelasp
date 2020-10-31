import { Component, Input } from '@angular/core';
import { faHeart, faGlobe, faClock, faGem} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  heart = faHeart;
  diamond = faGem;
  punctuality = faClock;
  world = faGlobe;
  constructor() {
  }
}