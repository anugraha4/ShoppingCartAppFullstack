import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
name=""
address=""
phnno=""
email=""
pass=""
confpass=""

register=()=>{
 let res:any=[{
  "name":this.name,"address":this.address,"phnno":this.phnno,"email":this.email,"pass":this.pass,"confpass":this.confpass
 }]
 console.log(res)
}

}
