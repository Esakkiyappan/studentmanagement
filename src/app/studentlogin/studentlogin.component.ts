import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ManagementserviceService } from '../managementservice.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent {

  constructor(private service: ManagementserviceService, private route: Router) { }

  loginform = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)


  })
  loginsubmit() {
    var name = this.loginform.value.username;
    var pass = this.loginform.value.password;

    console.log(this.loginform.value);

    this.service.logi(this.loginform.value).subscribe((res) => {
      console.log(res.message)
      if(res.message=='wrong'){
      
      Swal.fire({
        icon: 'error'
      })}
      else {
        this.route.navigate(['/result'])
        Swal.fire({
          icon:'success'
        })
      }
      
    })
    

  }

}
