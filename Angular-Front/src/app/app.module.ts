import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatCheckboxModule} from '@angular/material/checkbox';


import {DemoMaterialModule} from './material-module';



import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {MatBadgeModule} from '@angular/material/badge';

import { ToastrModule } from 'ngx-toastr';


import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
//Angular 6 Material Features
<<<<<<< HEAD
import {MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule, MatSidenavModule, MatListModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';




=======
import {MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio'
import { MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator'; 




>>>>>>> 53b9eeb15407c0ca2c3b5bf0451c53d521867198
import { HttpClientModule }    from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//patients component
import { PatientComponent } from './components/patients/patient/patient.component';
import { EditPatientComponent } from './components/patients/edit-patient/edit-patient.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';

//medical_report component 
import { MedireportComponent } from './components/medicalreport/medireport/medireport.component';

//service
import { AuthService } from './service/auth.service';
import { PatientService } from './service/patient.service';

import {} from './service/phamacist.service';

//phamacist component
import { PhamacistComponent } from './components/phamacist/phamacist.component';
import{AddmedicComponent} from './components/phamacist/addmedi/addmedic/addmedic.component';
import { PhamacistdashComponent } from './components/phamacistdash/phamacistdash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PhamacistHomeComponent } from './components/phamacist/phamacist-home/phamacist-home.component'
 //dashboard

//sidebar









const applicationRoutes:Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  //{path : '',redirectTo:'login',pathMatch:'full'},

  //patients
  {path : 'patient',component:PatientComponent},
  {path : 'patient/add',component:AddPatientComponent},
  {path : 'patient/edit/:id',component:EditPatientComponent},
<<<<<<< HEAD
=======

  //medicalreport
  {path : 'patient/medicalreport', component:MedireportComponent},
  
>>>>>>> 53b9eeb15407c0ca2c3b5bf0451c53d521867198

  //phamacist
  {path : 'phamacist',component:PhamacistComponent },
  {path : 'phamacist/add',component:AddmedicComponent},
  {path : 'phamacisthome',component:PhamacistHomeComponent},

];


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegisterComponent,
    PatientComponent,
    EditPatientComponent,
    AddPatientComponent,
<<<<<<< HEAD
    PhamacistComponent,
    AddmedicComponent,
    PhamacistdashComponent,
    PhamacistHomeComponent



=======
    MedireportComponent,
    
    
>>>>>>> 53b9eeb15407c0ca2c3b5bf0451c53d521867198

  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes),
    ReactiveFormsModule,
    MatDatepickerModule,


    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatGridListModule,
    MatMenuModule,
    ToastrModule,



    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    NgbModule,
    RouterModule,

    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatCheckboxModule,
    MatBadgeModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule


=======
    MatSortModule,
    MatRadioModule,
    BrowserAnimationsModule,
   
>>>>>>> 53b9eeb15407c0ca2c3b5bf0451c53d521867198
  ],
  //declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  providers: [AuthService,PatientService],
  bootstrap: [AppComponent],
  entryComponents:[AddmedicComponent]
})
export class AppModule { }
