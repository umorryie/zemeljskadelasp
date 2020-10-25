import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() offer: Offer;
  changeText = false;
  index: number;

  constructor() {
    this.index = 0;
  }

  changeImage() {
    this.index = (this.index + 1) % this.offer.images.length;
    this.offer.url = this.offer.images[this.index]["src"];
  }
}

interface Offer {
  offerName: string;
  url: string;
  images: Array<string>;
}