import { Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent:()=>import('./login/login.component').then(m=>m.LoginComponent)
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent:()=>import('./main-layout/main-layout.component').then(m=>m.MainLayoutComponent)
      },
    ],
  },
];
