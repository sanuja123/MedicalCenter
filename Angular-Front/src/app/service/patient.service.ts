import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})



export class PatientService {

  patient:any;

  uri = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  getPatient(){
    return this.http.get(`${this.uri}/patient`);
  }
  getPatientById(id){
    return this.http.get(`${this.uri}/patient/${id}`);
  }

  addPatient(patient){
    /*const patient = {
      reg_No:reg_No,
      name:name,
      age:age,
      address:address,
      mother: mother,
      father: father,
      diseases:diseases

    }*/
    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.post(`${this.uri}/patient/add`,patient,{headers :reqHeader});
  }

  updatePatient(id,patient){
    /*const patient = {
      reg_No:reg_No,
      name:name,
      age:age,
      address:address,
      mother: mother,
      father: father,
      diseases:diseases

    }*/
    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.post(`${this.uri}/patient/update/${id}`,patient,{headers :reqHeader});
  }

  deletePatient(id){
    return this.http.get(`http://localhost:3000/patient/delete/${id}`);
  }
}



