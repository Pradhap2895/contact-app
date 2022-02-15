import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentComponent implements OnInit {

  id:any;
  user=this._formBuilder.group({
    username:['',Validators.compose([Validators.required])],
    password:['',Validators.compose([Validators.required,Validators.minLength(8)])]
  });
  constructor(private _formBuilder : FormBuilder,private _router:Router,
    private _api:ApiService,private _actuated:ActivatedRoute) {
      this._actuated.params.subscribe((p:Params)=>{
        this.id = p['id'];
        console.log(this.id);
      },err=>{
        console.log(err)
      })
    }
   
 
  ngOnInit(): void {
  }
 
  errorMessage:any=undefined;

  login():void{
    let username = this.user.controls['username'].value;
    let password = this.user.controls['password'].value;
    //let id =2;
    console.log(this.user.value);
      this._api.fetchProfileById(username).subscribe(response =>{
      this.user=response;
      console.log(response);
      if(response.password === password){
        this.errorMessage=undefined;
        sessionStorage.setItem("user",response.userName);
        this._router.navigate(['success',response.userName]);
      }else{
        console.log('else')
        this.errorMessage="Password is not valid";
        this._router.navigate(['login']);
       
      }
     
    }, err => {
      this.errorMessage=err.error.error;
      this._router.navigate(['login']);
    
      });
  }
}
