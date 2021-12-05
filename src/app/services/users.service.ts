import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  userLogged: User;

  constructor() { }

  newUser(user: User){
    this.users.push(user);
  }
  show(){
    console.log(this.users);
  }
}
