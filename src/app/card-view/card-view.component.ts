import { Component } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent {
  data=[{
    "productname":"Bike",
    "category":"Vehicle",
    "description":"fghjk",
    "price":"130000",
    "image":"https://m.media-amazon.com/images/I/81XyIoZ8+HL._SL1500_.jpg"
  },
  {
    "productname":"Car",
    "category":"Vehicle",
    "description":"qwertyu",
    "price":"850000",
    "image":"https://imgd-ct.aeplcdn.com/320x200/n/cw/ec/32597/altroz-exterior-right-front-three-quarter-79.jpeg?isig=0&q=75"
  },
  {
    "productname":"Laptop",
    "category":"Vehicle",
    "description":"qwertyu",
    "price":"850000",
    "image":"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1000_.jpg"
  },
  {
    "productname":"TV",
    "category":"Vehicle",
    "description":"qwertyu",
    "price":"850000",
    "image":"https://images.philips.com/is/image/PhilipsConsumer/58PUT6604_94-IMS-en_IN?$jpglarge$&wid=960"
  }]
}
