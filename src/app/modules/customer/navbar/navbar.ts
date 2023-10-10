// import { Router } from "@angular/router";
// import { registerData } from "../register/registerData";
// import { Injectable } from "@angular/core";



// export class navbarTS{

//     role!: string;
//     userData!: registerData[];
  
//     constructor(private router: Router){
//         this.role = ''
//     }

//     ngOnInit(): void{
//         this.router.events.subscribe((val: any) => {
//             if(val.url){
//               if(localStorage.getItem('user')){
//                 this.userData = JSON.parse(localStorage.getItem('user') || '{}');
//                 if(this.userData[0]?.type === 'customer'){
//                   console.log("not admin");
//                   this.role = "customer"
//                 } else if(this.userData[0]?.type === 'admin') {
//                   this.role = "admin"
//                 }        
//               } else 
//                   this.role = '';
//             }
//           })
//     }
// }