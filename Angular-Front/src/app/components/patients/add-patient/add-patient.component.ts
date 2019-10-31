import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PatientService } from '../../../service/patient.service';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})

export class AddPatientComponent implements OnInit {

  createForm:FormGroup;
 

  constructor(private patientService:PatientService, private fb:FormBuilder, private router:Router) { 
    this.createForm=this.fb.group({
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
  }
  
  get diseases() {
    return this.createForm.get('diseases') as FormArray;
  }

  addDiseases() {
    this.diseases.push(this.fb.control(''));
  }
  

  addPatient(reg_No,name,age,address,mother,father,diseases){
    let Form = JSON.stringify(this.createForm.value);
    console.log(Form);
    this.patientService.addPatient(Form).subscribe(()=>{
      //console.log(res);
      this.router.navigate(['/patient']);
    });
   
    
  }
  

}
