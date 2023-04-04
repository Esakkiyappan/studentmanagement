import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { __values } from 'tslib';
import { ManagementserviceService } from '../managementservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private service: ManagementserviceService,private route:Router) { }

  alldata: any
  hide: any = false
sem:any;
  adminhome = new FormGroup({
    "semester": new FormControl("", Validators.required)
  })

  adminsubmit(): void {
    var sem = this.adminhome.value.semester

    console.log(this.adminhome.value.semester)
  }
  onBookChange(event: any) {
    this.hide = true;

    // Prints selected value
   this.sem = event.value;
    console.log(event.value);
    this.service.semester(this.sem).subscribe((res) => {
      console.log(res.message)
      this.alldata = res.message;
    })

  }
  semform = new FormGroup({
    "registerno": new FormControl("", Validators.required),
    "studentname": new FormControl("", Validators.required),
    "year": new FormControl("", Validators.required),
    "sub1": new FormControl("", Validators.required),
    "sub2": new FormControl("", Validators.required)
  })
  semsubmit(){
this.service.student(this.sem,this.semform.value).subscribe((res)=>{
console.log(res.message)
Swal.fire({
  title:res.message,
  icon:'success'
})
})
this.route.navigate(['/home'])
  }
}
