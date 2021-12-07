import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];
  userLogged: User;

  userId: number = 0;

  constructor() {
    this.getUsersFromStorage()
      .then(
        data => this.users = data
      );

    this.getUserIdFromStorage()
      .then(
        data => this.userId = data
      );
  }

  logIn(userId: number, email: string){
    this.userLogged = {...this.users.filter(user => user.email === email)[userId]};
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    const user = this.users.filter(t => t.id === id)[0];
    const newUser = Object.assign({}, user);
    return of(newUser);
    //return of({...this.users.filter(t => t.id === id)[0]});
  }

  async saveUser(user: User): Promise<boolean> {
    if (user.id == undefined) {
      user.id = this.userId++;
      this.users.push(user);
    } else {
      this.users.push(user);
    }

    await this.saveUsersIntoStorage();
    await this.saveUserIdIntoStorage();

    return true;
  }

  async getUsersFromStorage(): Promise<User[]> {
    const ret = await Storage.get({ key: 'users' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }

  async getUserIdFromStorage(): Promise<number> {
    const ui = await Storage.get({ key: 'userId' });
    console.log("Users: " + JSON.stringify(ui.value));
    return Number.isInteger(+ui.value) ? +ui.value : 0;
  }

  async getUserLoggedFromStorage(): Promise<User> {
    const ret = await Storage.get({ key: 'userLogged' });
    return JSON.parse(ret.value) ? JSON.parse(ret.value) : [];
  }

  async saveUsersIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'users',
      value: JSON.stringify(this.users),
    });

    return true;
  }

  async saveUserLoggedIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'userLogged',
      value: JSON.stringify(this.userLogged),
    });

    return true;
  }

  async saveUserIdIntoStorage(): Promise<boolean> {
    await Storage.set({
      key: 'userId',
      value: '' + this.userId,
    });

    return true;
  }

  // newUser(user: User){
  //   user.id = this.userId++;
  //   this.users.push(user);
  // }
  // show(){
  //   console.log(this.users);
  // }
}
