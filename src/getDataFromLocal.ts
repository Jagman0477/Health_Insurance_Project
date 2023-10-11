import { Injectable } from "@angular/core";
import { registerData } from "./app/modules/defaultComponents/register/registerData";

@Injectable({
  providedIn: 'root'
})

export class getDataFromLocal{
    
    role!: string;
    userData!: registerData[];

    constructor(){ }

    getRole(): string{
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
        return this.role;
    }
}