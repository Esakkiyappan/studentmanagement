import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ManagementserviceService } from '../managementservice.service';

@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent {

  constructor(private service:ManagementserviceService,private route:Router){}
  

   registerform =new FormGroup({
    "name":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required),
    "cfpassword":new FormControl("",Validators.required),
    "registerno":new FormControl("",Validators.required),
    "dob":new FormControl("",Validators.required)
   })

   registersubmit(){
    var name= this.registerform.value.name;
  var pass=this.registerform.value.password;
  var cpass=this.registerform.value.cfpassword;
  var regno=this.registerform.value.registerno;
  var dob= this.registerform.value.dob;

  console.log(this.registerform.value)

  this.route.navigate(['/studentlogin'])
  
  this.service.reg(this.registerform.value).subscribe((res)=>{
    console.log(res)

  })  
  Swal.fire({
    title:'inserted',
    icon:'success'
  })
  
  
}

}
