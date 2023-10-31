export class registerData{

    name:string;
    age:number;
    gender:string;
    email:string;
    password:string;
    contactNo: number;
    confirmPassword:string;
    role: string;

    constructor(){
        this.name = '';
        this.age = 0;
        this.gender = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.role = "USER";
        this.contactNo = 0;
    }
 
}