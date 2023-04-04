import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


  constructor(private route:Router){}

  adminform= new FormGroup({
    "username":new FormControl('',Validators.required),
    "password":new FormControl('',Validators.required)
  })
  
  val(){
    console.log(this.adminform.value)
    var uname=this.adminform.value.username;
    var pass=this.adminform.value.password;

    if(uname=="admin" && pass=="123"){
       this.route.navigate(['/home'])
       Swal.fire({
        title:'login sucess'
       })

    }
    else{
      Swal.fire({
        title:'login Failed'
      })
    }
  
  }

get username():FormControl {
  return this.adminform.get('username') as FormControl;
}  
get password():FormControl {
  return this.adminform.get('password') as FormControl
}

@Input()

set loginpending(disable:boolean){
if(disable){
  this.adminform.disable()
}
else{
  this.adminform.enable()
}

}
}