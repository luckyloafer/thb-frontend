import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwt_decode = require('jwt-decode');
  constructor() { }

  public currentUser = new BehaviorSubject<any>(null);
  public curretnUser$ = this.currentUser.asObservable()

  login(username:string,password:string,rememberMe:boolean){
    alert('login success')
  }

  logOut(){
    alert('logout success');
  }
}
