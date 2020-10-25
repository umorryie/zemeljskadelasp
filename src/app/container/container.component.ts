import { Component } from '@angular/core';
import { offers } from '../offers';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  offers = offers.offers;
  changeText: boolean;
  frontPictures: Array<string>;
  index: number;
  constructor(){
    this.changeText = false;
    this.frontPictures = ["../../assets/20190330_131053.jpg", "../../assets/20190620_130646.jpg", "../../assets/20200405_092042.jpg"];
    this.index = 0;
  }

  changeIndex(value: number){
    this.index = (this.index + value) % 3;
  }
}