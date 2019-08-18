import { Component, OnInit,ViewChild } from '@angular/core';
import { PatientService } from '../../../service/patient.service';
import {Router} from '@angular/router';
import{MatTableDataSource} from '@angular/material';

import {Patient} from '../../../patient.model';



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  

  patient:Patient[];
  displayedColumns:string[]=['reg_No','name','age','address','mother','father','diseases','action'];
  
 
  
  
  constructor(private patientService:PatientService,private router:Router) { }
 
 
  ngOnInit() {
    /*this.patientService.getPatient().subscribe((patient)=>{
      console.log(patient);
    })*/
    this.fetchPatients();
    
  }

  fetchPatients(){
    this.patientService
      .getPatient()
      .subscribe((data:Patient[])=>{
        this.patient = data;
        console.log('Data requested......');
        console.log(this.patient);
      
        
      });
  }

  editPatient(id){
    this.router.navigate([`/patient/edit/${id}`]);
  }
  deletePatient(id){
    this.patientService.deletePatient(id).subscribe(()=>{
      this.fetchPatients();
      
    });
  }
  

}









