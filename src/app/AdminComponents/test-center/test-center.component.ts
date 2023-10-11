import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { TestCenterService } from '../service/test-center.service';
import { TestCenter } from './test-center';

@Component({
  selector: 'app-test-center',
  templateUrl: './test-center.component.html',
  styleUrls: ['./test-center.component.css']
})
export class TestCenterComponent implements OnInit {
    centerForm=new FormGroup({
    centerName:new FormControl('',[Validators.required]),
    centerContact: new FormControl('',[Validators.required]),
    centerAddress: new FormControl('', [Validators.required]),
    centerEmail: new FormControl('',[Validators.required,Validators.email]),
    testsOffered: new FormControl('',[Validators.required])
  })

  constructor(private centerService: TestCenterService){}

  addCenterMessage:string|undefined;

  submitCenter(){

  }

  get center(){
    return this.centerForm.get('centerName')
  }


  centerList: undefined | TestCenter[];
  deleteCenterMessage:string|undefined;
  
  ngOnInit(): void {
    this.refreshingCenterList();
  }
  
  
  deleteCenter=(id:number)=>{
    this.centerService.deleteCenter(id).subscribe((res)=>{
      if(res){
        this.deleteCenterMessage="Test center has been deleted";
        this.refreshingCenterList();          
      }
      setTimeout(()=>(this.deleteCenterMessage=undefined),3000);
    })
  }

  addCenter(data:any){
    this.centerService.addCenter(data).subscribe((res) => {
      if (res) {
        this.addCenterMessage = 'Test Center has been added';
        this.refreshingCenterList();
        this.centerForm.reset();
      }
      setTimeout(() => (this.addCenterMessage = undefined), 3000);
    });

  }

  refreshingCenterList(){
    this.centerService.getCenterList().subscribe((res)=>{
      if(res && res.length){
        this.centerList=res;
      }
    })
  }
}
