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



//   public getPayLoad(token: string){
//     const decoded = this.jwt_decode(token);
//     const email = localStorage.getItem('email');
//     decoded.email = email;
//     return decoded;
// }
}
