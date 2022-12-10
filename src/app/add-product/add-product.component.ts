import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
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
  }
}
