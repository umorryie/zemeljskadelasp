import { Component } from '@angular/core';
import { offers } from '../offers';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  offers = offers.offers;
}