import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

const images = ["../../assets/20200405_092042.jpg", "../../assets/20200405_091940.jpg", "../../assets/sillos.jpg", "../../assets/rezervv.jpg", "../../assets/vlaka.jpg", "../../assets/20190810_094325.jpg"];
const first = {
};
const second = {};
const third = {};
const fourth = {};


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('fadeIn', [
      state('in', style({ 'opacity': '0.8' })),
      state('out', style({ 'opacity': '0' })),
      transition('* => *', [
        animate(900)
      ])
    ])
  ]
})
export class NavbarComponent {
  state = 'in';
  private current: number = 0;
  counter = 0;
  enableAnimation = false;
  images: Array<string>;
  index: number;
  currentImage: any;
  constructor() {
    this.images = ["../../assets/20200405_091940.jpg", "../../assets/20190620_130646.jpg", "../../assets/vlaka.jpg", "../../assets/20200405_092042.jpg"];
    this.index = 0;
    this.currentImage = `url("../../assets/20200405_092042.jpg")`;
  }

  goToOfferingThins(){
    document.querySelector('.mainContainer').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  goToContactUs(){
    document.querySelector('.backgroundd').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  goToContacts(){
    document.querySelector('.contacts').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  goToAboutUs(){
    document.querySelector('.aboutContainer').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  ngOnInit() {
    setInterval(() => {
      this.runAnimation(); 
    }, 3500);
  }

  runAnimation() {
    this.enableAnimation = true;
    this.counter = 0;
    this.toggleState();
  }

  toggleImg() {
    this.currentImage = `url(${this.images[this.current]})`;
    this.current == this.images.length - 1 ? (this.current = 0) : ++this.current;
  }

  onDone($event) {
    if (this.enableAnimation) {
      if (this.counter === 1) {
        this.toggleImg();
      }
      this.toggleState();
    }
  }

  toggleState() {
    if (this.counter < 2) {
      this.state = this.state === 'in' ? 'out' : 'in';
      this.counter++;
    }
  }
}