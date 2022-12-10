import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}
  productname=""
  searchProduct:any=[]
  search=()=>
  {
    let ser:any=[{
      "productname":this.productname
    }]
    console.log(ser)
    this.api.searchProduct(ser).subscribe(
      (respons:any)=>
      {
        console.log(respons)
        if(respons.length==0){
          alert("Invalid product name")
        }
        else{
          this.searchProduct=respons
        }

      }
    )
    
  }
}
