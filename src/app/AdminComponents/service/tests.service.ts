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

  addTests(data:object  ){  
    
    return this.http.post(this.url,data)
  }
}
