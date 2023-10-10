import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { TestClass } from '../tests/test-class';

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  
  constructor(private http: HttpClient) { }
  url="http://localhost:3000/tests"

  getTestsList(){
   
    return this.http.get<TestClass[]>(this.url)
  }

  addTests(data:TestClass[] ){  
    return this.http.post(this.url,data)
  }
  deleteTest(id:number){
    return this.http.delete(`http://localhost:3000/tests/${id}`)
  }

  // getTest(id:string){
  //  return this.http.get<TestClass>(`http://localhost:3000/tests/${id}`)
  // }
  // updateTest(test:TestClass){
  //   return this.http.put<TestClass>(`http://localhost:3000/tests/${test.id}`,test)
  // }
}
