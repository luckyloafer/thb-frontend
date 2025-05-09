import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  let currentUser;
  authService.curretnUser$.subscribe(data=>currentUser = data)

  if(currentUser){
    console.log(currentUser)
    return true;
  }
  else{
    router.navigate(['/login'])
    return false
  }

  
  
  
};
