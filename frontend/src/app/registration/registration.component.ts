import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder,
    private _api:ApiService,
    private _route:Router) { }

  success:any=undefined;
  errMsg:any=undefined;

  ngOnInit(): void {
  }
  registerForm = this._formBuilder.group({
    // userId:[''],
    userName : ['',Validators.compose([Validators.required,Validators.minLength(2)])],
    password : ['',Validators.compose([Validators.required,Validators.minLength(2)])],
    phone : ['',Validators.compose([Validators.required,Validators.minLength(10)])],
    dob : ['',Validators.compose([Validators.required])],
  })
  submitUser():void{
    console.log(this.registerForm.value);
    this._api.storeProfile(this.registerForm.value).subscribe(response=>{
      console.log(response.userId);
      this.success=response.success;
      // console.log(this.success.userId);
      this.registerForm.reset();
      this._route.navigate(['login',response.userId]);
    },err => {
      this.errMsg = err.error.error;
    })
  }
}
