import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TestsService {

  
  constructor(private http: HttpClient) { }
  url="http://localhost:3000/tests"
  getList(){
    console.log("Get Teests List")
    return this.http.get(this.url)
  }

  addTests(data:object  ){
    return this.http.post(this.url,data)
  }
}
