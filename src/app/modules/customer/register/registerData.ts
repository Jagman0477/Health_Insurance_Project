export class registerData{

    name:string;
    age:number;
    gender:string;
    email:string;
    password:string;
    confirmPassword:string;
    type: string;

    constructor(){
        this.name = '';
        this.age = 0;
        this.gender = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.type = "customer";
    }
 
}