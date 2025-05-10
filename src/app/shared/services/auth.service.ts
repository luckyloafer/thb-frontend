import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public currentUser = new BehaviorSubject<any>(null);
  public curretnUser$ = this.currentUser.asObservable()

  login(username:string,password:string,rememberMe:boolean){
    alert('login succeess')
  }

  logOut(){
    alert('logout success');
  }

  
}
