import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private api:ApiService){}

  productname=""
  category=""
  description=""
  price=""
  image=""


  readValues=()=>
  {
    let data:any=[{
      "productname":this.productname,"category":this.category,"description":this.description,"price":this.price,"image":this.image

    }
  ]
  console.log(data)
  this.api.addProduct(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        this.productname=""
        this.category=""
        this.description=""
        this.price=""
        this.image=""
      }
      else{
        alert("Something went wrong")
      }
    }
  )
  }
}
