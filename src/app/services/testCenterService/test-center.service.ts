import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestCenter } from 'src/app/modules/admin/AdminComponents/test-center/test-center';

@Injectable({
  providedIn: 'root'
})
export class TestCenterService {

  constructor(private http: HttpClient) { }
  url="http://localhost:3000/testCenter"

  getCenterList(){
    return this.http.get<TestCenter[]>(this.url);
  }
  deleteCenter(id:number){
    return this.http.delete(`http://localhost:3000/testCenter/${id}`)
  }
  addCenter(data:TestCenter){
    return this.http.post(this.url,data)
  }
  
}
