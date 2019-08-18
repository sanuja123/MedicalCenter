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
import { PatientService } from './service/patient.service';









const applicationRoutes:Routes = [
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : '',redirectTo:'login',pathMatch:'full'},

  //patients
  {path : 'patient',component:PatientComponent},
  {path : 'patient/add',component:AddPatientComponent},
  {path : 'patient/edit/:id',component:EditPatientComponent},
  


];  


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PatientComponent,
    EditPatientComponent,
    AddPatientComponent,
    
    

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
