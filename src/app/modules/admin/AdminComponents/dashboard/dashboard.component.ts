import { Component } from '@angular/core';
import { TestCenterService } from 'src/app/services/testCenterService/test-center.service';
import { TestsService } from 'src/app/services/testService/tests.service';
import { TestClass } from '../tests/test-class';
import { TestCenter } from '../test-center/test-center';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private tests: TestsService, private centerService: TestCenterService) {}
  testList: undefined | TestClass[];
  centerList:undefined | TestCenter[];

  ngOnInit(): void {
    this.refreshingTestList();
    this.refreshingCentertList();
  }

  refreshingTestList(){
    this.tests.getTestsList().subscribe((res) => {
      if(res){
        this.testList = res;
      }
    });
  }
  refreshingCentertList(){
    this.centerService.getCenterList().subscribe((res) => {
      if(res){
        this.centerList = res;
      }
    });
  }
}
