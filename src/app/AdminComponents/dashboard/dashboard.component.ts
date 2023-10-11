import { Component,OnInit } from '@angular/core';
import { TestClass } from '../tests/test-class';
import { TestsService } from '../service/tests.service';
import { TestCenterService } from '../service/test-center.service';
import { TestCenter } from '../test-center/test-center';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


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
