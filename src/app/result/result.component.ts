import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagementserviceService } from '../managementservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
alldata:any=[]
hide:any =false
constructor(private service:ManagementserviceService){}


  resultform=new FormGroup({
    "semester":new FormControl("",Validators.required),
    "regnumber":new FormControl("",Validators.required)
  })

  resultsubmit(){
    var sem=this.resultform.value.semester ;
    var reg=this.resultform.value.regnumber;

    console.log(this.resultform.value)
    alert("hii")

    this.service.result1(this.resultform.value).subscribe((res)=>{
      console.log(res.message)
    this.alldata=res.message
       
    
    })
    this.hide=true
   }
   
  
    
   
  }


