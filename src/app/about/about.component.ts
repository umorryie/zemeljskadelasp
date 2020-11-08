import { Component, Input } from '@angular/core';
import { faHeart, faGlobe, faClock, faGem, faHandshake, faFileAlt, faGraduationCap, faTools} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  heart = faHeart;
  diamond = faGem;
  handShake = faHandshake;
  predracuni = faFileAlt;
  nadzor = faGraduationCap;
  qulity = faTools;
  punctuality = faClock;
  world = faGlobe;
  constructor() {
  }
}