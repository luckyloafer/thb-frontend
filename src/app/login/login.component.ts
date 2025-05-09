import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  makeRequest() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      delay(3000) // ⏳ Add artificial 3-second delay
    ).subscribe(res => {
    });
  }
}
