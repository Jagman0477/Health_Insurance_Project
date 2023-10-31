import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './services/loginService/login-service.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

class AuthGuard {
  constructor(private login: LoginServiceService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
    if(this.login.isUserLoggedIn)
      return true;
    return false;
  }
}

export const isAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean => {
  return inject(AuthGuard).canActivate(route, state)
}


// export class AuthGuard implements CanActivate {

//   constructor(private login: LoginServiceService){}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
//     return this.login.isUserLoggedIn;
//   }
// }
