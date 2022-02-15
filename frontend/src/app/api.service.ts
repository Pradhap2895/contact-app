import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl='http://localhost:8787/profile';

  constructor(private _httpClient:HttpClient) { }

  storeProfile(profileData: any): Observable<any>{
   
    //let name = employeeData.name;
    //let sal = employeeData.salary;
    console.log('inside Store'+profileData+"sal:"+profileData.username);
    let url = `${this.baseUrl}`; 
   return this._httpClient.post(url,profileData);
  }

  fetchProfileById(id: number): Observable<any>{
    let url = `${this.baseUrl}/${id}`;
    return this._httpClient.get(url);
   }
}
