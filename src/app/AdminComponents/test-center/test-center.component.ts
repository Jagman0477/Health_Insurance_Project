import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-center',
  templateUrl: './test-center.component.html',
  styleUrls: ['./test-center.component.css']
})
export class TestCenterComponent {
  centerForm=new FormGroup({
    centerName:new FormControl('',[Validators.required]),
    centerContact: new FormControl('',[Validators.required]),
    centerAddress: new FormControl('', [Validators.required]),
    centerEmail: new FormControl('',[Validators.required,Validators.email]),
    testsOffered: new FormControl('',[Validators.required])
  })


  submitCenter(){
    console.log(this.centerForm.value)
  }

  get center(){
    return this.centerForm.get('centerName')
  }
}
