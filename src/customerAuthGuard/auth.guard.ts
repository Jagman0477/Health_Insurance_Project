import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { registerData } from 'src/app/modules/defaultComponents/register/registerData';
import { LoginServiceService } from 'src/app/services/loginService/login-service.service';

@Injectable({
  providedIn: 'root'
})

class customerauthGuard {
  
  role!: string;
  userData!: registerData[];

  constructor(private login: LoginServiceService, private router: Router){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    if(this.login.isUserLoggedIn && (this.login.getRole() == 'USER')){
        return true;
    }
    
    return false;
  }
}

export const isCustomerAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  return inject(customerauthGuard).canActivate(route, state)
}