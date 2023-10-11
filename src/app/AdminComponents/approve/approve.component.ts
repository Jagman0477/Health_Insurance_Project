import { Component } from '@angular/core';
import { Approve } from './approve';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent {
  
  model=new Approve;
  
  submitResultForm(){

  }
}
