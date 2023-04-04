import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ManagementserviceService {

  constructor(private http:HttpClient) { }

  apiurl="http://localhost:3000/sem/"

  semester(data:any):Observable<any>{
    console.log(data,'createapi=>')
    return this.http.post(`${this.apiurl}`+data,data)
  }

  apiurl2="http://localhost:3000/student/"
  student(sem:any,data:any):Observable<any>{
    console.log(data,'createapi=>')
    return this.http.post(`${this.apiurl2}`+sem,data)
  }

  url3="http://localhost:3000/studentreg/"
  reg(data:any):Observable<any>{
    console.log(data,'createapi=>')
    return this.http.post(`${this.url3}`,data)
  }  

  slogurl="http://localhost:3000/studentlog/"
  logi(data:any):Observable<any>{
    console.log(data,'createapi=>')
    return this.http.post(`${this.slogurl}`,data)

  }

  sresurl="http://localhost:3000/stu/"
  result1(data:any):Observable<any>{
    console.log(data)
    return this.http.post(`${this.sresurl}`,data)
  }

 
}
