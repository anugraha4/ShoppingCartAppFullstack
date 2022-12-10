import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  email=""
  pass=""

  user=()=>
  {
   let usr:any= [{"email":this.email,"pass":this.pass}]
    console.log(usr)
  }
}
