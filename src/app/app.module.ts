import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { ResultComponent } from './result/result.component';
import { UhomeComponent } from './uhome/uhome.component';
import { FootComponent } from './foot/foot.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StudentloginComponent,
    AdminloginComponent,
    HomeComponent,
    StudentregisterComponent,
    ResultComponent,
    UhomeComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
