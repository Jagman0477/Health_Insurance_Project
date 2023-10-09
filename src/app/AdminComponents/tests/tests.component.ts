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

  constructor(private tests:TestsService){}

  testForms(data:object){
    // console.warn(data);
    this.submitted=true;
    this.tests.addTests(data).subscribe((res)=>{
      console.warn(res )
    });
  }

  

  ngOnInit():void{
    
  }

}
