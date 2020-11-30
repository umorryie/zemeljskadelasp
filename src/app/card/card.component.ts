import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements  OnInit {
  @Input() offer: Offer;
  changeText = false;
  index: number;
  hoverAll: boolean;
  hoverText: boolean;
  moreThanOnePicture: boolean;

  constructor() {
    this.index = 0;
  }
  ngOnInit() {
    if (document.body.offsetWidth < 750) { // 768px portrait
      this.hoverAll = true;
    }

    if(this.offer.images.length > 1) {
      this.moreThanOnePicture = true;
    }
  }

  changeHoverOff(){
    if(document.body.offsetWidth < 750){
      this.hoverAll = true;
    } else{
      this.hoverAll = false;
    }
  }

  changeImage(value: number) {
    let newValue = this.index + value;

    if (newValue < 0) {
      this.index = this.offer.images.length - 1;
      this.offer.url = this.offer.images[this.index]["src"];
    } else {
      this.index = (this.index + value) % this.offer.images.length;
      this.offer.url = this.offer.images[this.index]["src"];
    }
  }
}

interface Offer {
  offerName: string;
  url: string;
  images: Array<string>;
}