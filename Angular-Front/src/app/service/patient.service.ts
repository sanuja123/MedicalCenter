import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Patient} from '../patient.model';


@Injectable({
  providedIn: 'root'
})

export class PatientService {
  
  //patient:any;
  patient:Patient[];
  uri = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  getPatient(){
    return this.http.get(`${this.uri}/patient`);
  }
  getPatientById(id){
    return this.http.get(`${this.uri}/patient/${id}`);
  }

  addPatient(patient){
    
    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.post(`${this.uri}/patient/add`,patient,{headers :reqHeader});
  }

  updatePatient(id,patient){
    
    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.post(`${this.uri}/patient/update/${id}`,patient,{headers :reqHeader});
  }

  deletePatient(id){
    return this.http.get(`http://localhost:3000/patient/delete/${id}`);
  }

 

  
}



