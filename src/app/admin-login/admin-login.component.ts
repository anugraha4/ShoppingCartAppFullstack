import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
username=""
password=""

admin=()=>
  {
    let adm:any=[{
      "username":this.username,"password":this.password

    }
  ]
  console.log(adm)
  if(this.username=="admin" && this.password=="12345")
  {alert("Valid login")}
  else{
    alert("invalid")
  }
  }
}
