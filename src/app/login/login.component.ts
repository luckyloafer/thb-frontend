import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';
import { InspectingComponent } from '../shared/components/inspecting/inspecting.component';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports:[FormsModule,InspectingComponent]
})
export class LoginComponent {
  constructor(private http: HttpClient,private loginService:AuthService) {}

  username:string = ''

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      delay(3000) // ⏳ Add artificial 3-second delay
    ).subscribe(res => {
    });
  }

  login(){
    this.loginService.login('lakshman','123',true)
  }
}
