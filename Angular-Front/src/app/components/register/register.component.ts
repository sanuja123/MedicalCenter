import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // username: String;
  // email: String;
  // password: String;
  // cpass: String;

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private _userService: UserService) { }



  ngOnInit() {
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }

  // registerData(formdata: NgForm) {
  //   const user = {
  //     username: this.username,
  //     email: this.email,
  //     password: this.password,
  //     cpass: this.cpass
  //   };
  //   this.authService.registerUser(user).subscribe(res => {
  //     console.log(res);
  //   });



  // }
  register() {
    if (!this.registerForm.valid || (this.registerForm.controls.password.value !== this.registerForm.controls.cpass.value)) {
      console.log('Invalid Form'); return;
    }
    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data => {console.log(data); this._router.navigate(['/login']); },
      error => console.error(error)
    );
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
