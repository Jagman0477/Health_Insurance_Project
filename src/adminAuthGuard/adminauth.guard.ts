import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { registerData } from 'src/app/register/registerData';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Injectable({
  providedIn: 'root'
})

class adminauthGuard {
  
  role!: string;
  userData!: registerData[];

  constructor(private login: LoginServiceService, private router: Router){
      this.router.events.subscribe((val: any) => {
        if(val.url){
          if(localStorage.getItem('user')){
            this.userData = JSON.parse(localStorage.getItem('user') || '{}');
            if(this.userData[0]?.type === 'customer'){
              console.log("not admin");
              this.role = "customer"
            } else if(this.userData[0]?.type === 'admin') {
              this.role = "admin"
            }        
          } else 
              this.role = '';
        }
      })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    if(this.login.isUserLoggedIn){
      if(this.role === 'admin')
        return true;
      return false;
    }
    return false;
  }
}

export const isAdminAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  return inject(adminauthGuard).canActivate(route, state)
}
