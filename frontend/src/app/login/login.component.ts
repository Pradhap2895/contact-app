import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder) { }

  user=this._formBuilder.group({
    username:['',Validators.compose([Validators.required,Validators.minLength(2)])],
    password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });
  ngOnInit(): void {
  }


  login():void{
    console.log(this.user.value);
  }
}
