import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import{ MatSnackBar, MatSnackBarModule} from '@angular/material';


import {Patient} from '../../../patient.model';
import { PatientService } from '../../../service/patient.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  id: String;
  patient:any={};

  updateForm:FormGroup;

  constructor(private patientService:PatientService,private router:Router,private route:ActivatedRoute,private snackBar:MatSnackBar,private fb:FormBuilder) { 
    this.createForm();

  }

  createForm(){
    this.updateForm=this.fb.group({
      reg_No:['',Validators.required],
      name:['',Validators.required],
      age:['',Validators.required],
      address:'',
      mobile_No:'',
      mother:this.fb.group({
        name:['',Validators.required],
        job:'',
        age:''
      }),
      father:this.fb.group({
        name:'',
        job:'',
        age:''
      }),
      //diseases:[''],
      diseases: this.fb.array([
        this.fb.control('')
      ]),
    });
  }



  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id;
      this.patientService.getPatientById(this.id).subscribe(res=>{
        this.patient = res;
        this.updateForm.get('reg_No').setValue(this.patient.reg_No);
        this.updateForm.get('name').setValue(this.patient.name);
        this.updateForm.get('age').setValue(this.patient.age);
        this.updateForm.get('address').setValue(this.patient.address);
        this.updateForm.get('mobile_No').setValue(this.patient.mobile_No);
        this.updateForm.get('mother').setValue(this.patient.mother);
        this.updateForm.get('father').setValue(this.patient.father);
        this.updateForm.get('diseases').setValue(this.patient.diseases);
      });
    });
  }

  get diseases() {
    return this.updateForm.get('diseases') as FormArray;
  }

  updateDiseases() {
    for (let i = 1; i <= 2; i++) {    
        this.diseases[i].Value = this.patient.diseases;  
  }
}
 
  
  updatePatient(reg_No,name,age,address,mobile_No,mother,father,diseases){
    let Form = JSON.stringify(this.updateForm.value);
    console.log(Form);
    this.patientService.updatePatient(this.id,Form).subscribe(()=>{
      this.snackBar.open('Patient updated successfully','OK',{
        duration:3000
      });
      this.router.navigate(['/patient']);
    });

  }
}