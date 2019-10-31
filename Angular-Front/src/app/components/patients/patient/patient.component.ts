import { Component, OnInit,ViewChild } from '@angular/core';
import { PatientService } from '../../../service/patient.service';
import {Router} from '@angular/router';
import{MatTableDataSource, MatPaginator,MatSort} from '@angular/material';
//import {Patient} from '../../../patient.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  //patient : MatTableDataSource<any>;
  constructor(private patientService:PatientService,private router:Router) { }
  //patient:Patient[];
  displayedColumns:string[]=['reg_No','name','age','address','mobile_No','mother','father','diseases','action'];
  dataSource: any;
  searchKey:string;

  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    /*this.patientService.getPatient().subscribe((patient)=>{
      console.log(patient);
    })*/
       
    
    this.fetchPatients();   
    
  }

  fetchPatients(){
    this.patientService
      .getPatient()
      .subscribe(res =>{
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        this.dataSource.sort = this.sort; 
        this.dataSource.paginator = this.paginator; 
        console.log('Data requested......');
        console.log(this.dataSource.data);
      
      });
    
      //this.patient.paginator = this.paginator;
  }

  editPatient(id){
    this.router.navigate([`/patient/edit/${id}`]);
  }
  deletePatient(id){
    this.patientService.deletePatient(id).subscribe(()=>{
      this.fetchPatients();
      
    });
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
  

}









