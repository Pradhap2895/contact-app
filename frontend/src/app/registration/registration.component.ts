import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm = this._formBuilder.group({
    username : ['',Validators.compose([Validators.required,Validators.minLength(2)])],
    password : ['',Validators.compose([Validators.required,Validators.minLength(2)])],
    phone : ['',Validators.compose([Validators.required,Validators.minLength(10)])],
    dob : ['',Validators.compose([Validators.required])],
  })
  submitUser():void{
    console.log(this.registerForm.value);
  }
}
