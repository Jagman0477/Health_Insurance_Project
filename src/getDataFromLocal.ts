import { Injectable } from "@angular/core";
import { registerData } from "./app/modules/defaultComponents/register/registerData";

@Injectable({
  providedIn: 'root'
})

export class getDataFromLocal{
    
    role!: string;
    userData!: any;

    constructor(){ }

    getRole(): string{
        if(localStorage.getItem('user')){
          this.userData?this.userData=JSON.parse(this.userData):this.userData='';
            if(this.userData?.userRole === 'USER'){
              console.log("not admin");
              this.role = "USER"
            } else if(this.userData?.userRole === 'ADMIN') {
              this.role = "ADMIN"
            }        
          } else 
              this.role = '';
        return this.role;
    }
}