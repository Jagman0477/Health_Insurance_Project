import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TestClass } from './test-class';
import { TestsService } from '../service/tests.service';



@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css'],
})
export class TestsComponent implements OnInit {
  model = new TestClass();

  submitted = false;

  addTestMessage: string | undefined;
  deleteTestMessage: string | undefined;

  constructor(private tests: TestsService) {}

  testForms(data:TestClass[]) {
    this.submitted = true;
    this.tests.addTests(data).subscribe((res) => {
      if (res) {
        this.addTestMessage = 'Test has been added';

        this.tests.getTestsList().subscribe((res) => {
          if(res){
            this.testList = res;
          }
        });
      }
      setTimeout(() => (this.addTestMessage = undefined), 3000);
    });

   

    // if(this.testData){
    //   uData.id=this.testData.id
    // }
    // this.tests.updateTest(uData).subscribe((res)=>{
    //    if(res){
    //     this.updateTestMessage='Test has been updated'
    //    }
    //    setTimeout(() => (this.updateTestMessage = undefined), 3000);
    // });
    
  }

  
  testList: undefined | TestClass[];
  

  ngOnInit(): void {
    this.refreshingTestList();

    // let testId=this.route.snapshot.paramMap.get('id')
    // testId && this.tests.getTest(testId).subscribe((res)=>{
   
    //   this.testData=res;
    // })
  }

    deleteTest=(id:number)=>{
      this.tests.deleteTest(id).subscribe((res)=>{
        if(res){
          this.deleteTestMessage="Test has been deleted";
          this.refreshingTestList();          
        }
        setTimeout(()=>(this.deleteTestMessage=undefined),3000);
      })
    }

    refreshingTestList(){
      this.tests.getTestsList().subscribe((res) => {
        if(res){
          this.testList = res;
        }
      });
    }

    

}
