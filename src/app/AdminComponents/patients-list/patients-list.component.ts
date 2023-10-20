import { Component, EventEmitter } from '@angular/core';
import { registerData } from 'src/app/register/registerData';
import { PatientListServiceService } from 'src/app/services/patientList/patient-list-service.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent {

  patientList: registerData[] | undefined; 
  isPatientListEmpty = new EventEmitter<boolean>(false);
  patientListError: string = '';
  
  constructor(private patients: PatientListServiceService){ }

  ngOnInit(): void{
    this.refreshPatientList();
  }

  refreshPatientList(){
    this.patients.patientList().subscribe((result: any) => {
      console.log(result);      
      if(result && result.length){
        this.patientList = result;
      }
      else {
        this.isPatientListEmpty.emit(true);
        this.patientListError = "Patient list is empty."
      }
    });
  }

  deletePatient(id: number){
    this.patients.deletePatient(id).subscribe((result) => {
      if(result)
        this.refreshPatientList();
    })
  }

}
