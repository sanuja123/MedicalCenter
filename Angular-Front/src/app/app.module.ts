import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


//Angular 6 Material Features
import {MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

//patients component
import { PatientComponent } from './components/patients/patient/patient.component';
import { EditPatientComponent } from './components/patients/edit-patient/edit-patient.component';
import { AddPatientComponent } from './components/patients/add-patient/add-patient.component';


//service
import { AuthService } from './service/auth.service';
<<<<<<< HEAD
import { PhamacistComponent } from './components/phamacist/phamacist.component';
=======
import { PatientService } from './service/patient.service';






>>>>>>> 9e710a80627944dd89a9b1a7552f96d54e660c3c



const applicationRoutes:Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
<<<<<<< HEAD
  {path : 'phamacist',component:PhamacistComponent}
];
=======
  {path : '',redirectTo:'login',pathMatch:'full'},

  //patients
  {path : 'patient',component:PatientComponent},
  {path : 'patient/add',component:AddPatientComponent},
  {path : 'patient/edit/:id',component:EditPatientComponent},
  


];  
>>>>>>> 9e710a80627944dd89a9b1a7552f96d54e660c3c


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    PhamacistComponent,

=======
    PatientComponent,
    EditPatientComponent,
    AddPatientComponent,
    
    
>>>>>>> 9e710a80627944dd89a9b1a7552f96d54e660c3c

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes),
    ReactiveFormsModule,
    
    
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
    MatPaginatorModule
   
  ],
  providers: [AuthService,PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
