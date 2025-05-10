import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';
import { InspectingComponent } from '../shared/components/inspecting/inspecting.component';
import { AuthService } from '../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports:[FormsModule,InspectingComponent,CommonModule]
})
export class LoginComponent {
  constructor(private http: HttpClient,private loginService:AuthService,private router:Router) {}

  username:string = '';
  logoSize:number = 200;
  showOptionsButton:boolean = false;
  centerLogo:any
  growLogo = false;
  showSideNav:boolean = false

  login(){
    this.centerLogo = true;
  }

  onAnimationEnd() {
    // Show the button only after animation completes
    this.showOptionsButton = true;
  }

  handleAnimationEnd(event: AnimationEvent) {
    this.showOptionsButton=true
    if (event.animationName === 'grow-and-go') {
      this.router.navigate(['/home']); // Navigate after grow animation
    }
  }

  makeRequest() {
    // Trigger the grow animation and navigate to the next page
    this.growLogo = true; // This starts the logo growth animation
    this.showSideNav = true
  }
}
