import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  goHome(){
    this.router.navigateByUrl('/home')
  }
  goRegister(){
    this.router.navigateByUrl('/register');
  }
  goRecover(){
    this.router.navigateByUrl('/recover');
  }
  goProfile(){
    this.router.navigateByUrl('/profile');
  }
  goReset(){
    this.router.navigateByUrl('/reset');
  }
  goCenter(){
    this.router.navigateByUrl('/center')
  }
}
