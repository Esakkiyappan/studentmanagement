import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { ResultComponent } from './result/result.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { UhomeComponent } from './uhome/uhome.component';


const routes: Routes = [
  {path:'main',component:MainComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'home',component:HomeComponent},
  {path:'studentregister',component:StudentregisterComponent},
  {path:'result',component:ResultComponent},
  {path:'',component:UhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
