import { UsersService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = {id: this.userService.users.length, firstName: null, lastName: null, email: null, password: null};

  registrationForm = this.formBuilder.group({
    firstName: [this.user.firstName, [Validators.required]],
    lastName: [this.user.lastName, [Validators.required]],
    email: [this.user.email, [Validators.required, Validators.email]],
    password: [this.user.password, [Validators.required, Validators.minLength(5)]],
  })

  constructor(public navigationService: NavigationService, public userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  registerUser(){
    this.userService.newUser(this.user);
    console.log(this.userService.users);
  }

  public submit(){
    console.log(this.registrationForm.value);
  }

}
