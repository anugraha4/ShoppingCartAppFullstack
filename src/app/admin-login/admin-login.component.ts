import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private route:Router){}
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
  {this.route.navigate(['/add'])}
  else{
    alert("invalid")
  }
  }
}
