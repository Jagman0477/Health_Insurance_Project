import { Component,Input,OnInit } from '@angular/core';
import { TestClass } from './test-class';
import { TestsService } from "../service/tests.service"


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit{

  model = new TestClass();

  submitted = false;  

  addTestMessage:string|undefined;
  constructor(private tests:TestsService){}

  testForms(data:object){
    this.submitted=true;
    this.tests.addTests(data).subscribe((res)=>{
      if(res){
        this.addTestMessage="Test has been added";
      }
      setTimeout(()=>this.addTestMessage=undefined,3000)
    });
  }

  testList:undefined|TestClass[];

  ngOnInit():void{
    this.tests.getTestsList().subscribe((res)=>{
      this.testList=res; 
    })
  }

}
