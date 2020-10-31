import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent {

  images: Array<string>;
  slika;
  index: number;
  constructor() {
    this.images = ["../../assets/20200405_092042.jpg", "../../assets/20200405_091940.jpg", "../../assets/sillos.jpg", "../../assets/rezervv.jpg", "../../assets/vlaka.jpg", "../../assets/20190810_094325.jpg"];
    this.index = 0;
  }
  ngAfterViewInit() {
    this.slika = "url('" + this.images[(this.index) % 3] + "')";
  }

  ngOnInit() {
    setInterval(() => {
      this.changeImage(); 
    }, 3500);
  }

  changeImage() {
    this.index = (this.index + 1) % this.images.length;
    this.slika = "url('" + this.images[this.index] + "')";
  }

}