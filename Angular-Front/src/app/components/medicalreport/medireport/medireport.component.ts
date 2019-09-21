import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-medireport',
  templateUrl: './medireport.component.html',
  styleUrls: ['./medireport.component.css']
})
export class MedireportComponent implements OnInit {

  medicalReport:FormGroup;
  favoriteSeason: string;
  seasons: string[] = ['Male', 'Female'];

  constructor(fb: FormBuilder) {
    this.medicalReport = fb.group({
     // hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

}
