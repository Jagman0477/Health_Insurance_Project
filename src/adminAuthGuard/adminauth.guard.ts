import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { registerData } from 'src/app/modules/defaultComponents/register/registerData';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Injectable({
  providedIn: 'root'
})

class adminauthGuard {
  
  role!: string;
  userData!: registerData[];

  constructor(private login: LoginServiceService, private router: Router){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    if(this.login.isUserLoggedIn && (this.login.getRole() === 'ADMIN')){
        return true;
    }
    return false;
  }
}

export const isAdminAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  return inject(adminauthGuard).canActivate(route, state)
}
