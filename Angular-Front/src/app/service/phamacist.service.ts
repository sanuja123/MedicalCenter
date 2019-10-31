import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhamacistService {

  uri = 'http://localhost:3000';
  constructor(private http : HttpClient) { }

  getPhamacist(){
    return this.http.get(`${this.uri}/phamacist`);
  }

  Addmedic(newmedi)
  {
    return this.http.get(`${this.uri}/phamacist/add`);
  }
  addPatient(patient){

    const reqHeader = new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
    return this.http.post(`${this.uri}/patient/add`,patient,{headers :reqHeader});
  }
}
