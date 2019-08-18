import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

import{ MatSnackBar, MatSnackBarModule} from '@angular/material';


import {Patient} from '../../../patient.model';
import { PatientService } from '../../../service/patient.service';

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
      diseases:[''],
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
        this.updateForm.get('mother').setValue(this.patient.mother);
        this.updateForm.get('father').setValue(this.patient.father);
        this.updateForm.get('diseases').setValue(this.patient.diseases);
      });
    });
  }

  updatePatient(reg_No,name,age,address,mother,father,diseases){
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
