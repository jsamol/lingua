import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-price-container',
  templateUrl: './price-container.component.html',
  styleUrls: ['./price-container.component.css']
})
export class PriceContainerComponent implements OnInit {
  @Input() isFree: boolean;
  @Input() price: string;
  @Input() visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
