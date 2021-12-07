import { User } from './../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  userLogged: User;
  userId = 0;

  constructor() { }

  newUser(user: User){
    user.id = this.userId++;
    this.users.push(user);
  }
  show(){
    console.log(this.users);
  }
}
