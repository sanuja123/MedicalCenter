import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PatientService } from '../../../service/patient.service';
 


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
