import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  productname=""

  search=()=>
  {
    let ser:any=[{
      "productname":this.productname
    }]
    console.log(ser)
  }
}
