import { Component,Input } from '@angular/core';
import { TestClass } from './test-class';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {

  model = new TestClass();

  submitted = false;

  testForms(item:any){
    console.warn(item);
    this.submitted=true;
  }
  

}
