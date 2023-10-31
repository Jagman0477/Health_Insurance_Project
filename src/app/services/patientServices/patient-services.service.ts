import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientServicesService {

  constructor(private http: HttpClient) { }

  patientList = () => {
    return this.http.get('http://localhost:8080/PERSON_SERVICE/api/getRegisters');
  }

  deletePatient = (id: number) => {
    return this.http.delete(`http://localhost:8080/PERSON_SERVICE/auth/user/${id}`);
  }

}
