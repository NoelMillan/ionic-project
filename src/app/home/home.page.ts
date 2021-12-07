import { User } from './../models/user';
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = "";
  password = "";
  isValid = false;
  cont = 0;

  constructor(public navigationService: NavigationService, public userService: UsersService, public toastController: ToastController) {
    userService.userLogged = null;
  }

  login(){
    this.cont = 0;
    while(this.cont < this.userService.users.length){
      if(this.email == this.userService.users.map(user => user.email)[this.cont] && this.password == this.userService.users.map(user => user.password)[this.cont]){
        this.isValid = true;
        this.cont = 0;
        break;
      } else{
        this.isValid = false;
        this.cont++;
      }
    }
    if(this.isValid){
      this.navigationService.goProfile();
      this.userService.logIn(this.cont, this.email);
      // this.userService.userLogged = {...this.userService.users.filter(user => user.email === this.email)[this.cont]};
      // console.log(this.userService.users.filter(user => user.email === this.email));
    } else{
      this.presentToast();
    }
    // if(this.user.map(user => user.email) == this.userService.users.map(user => user.email)){
    //   console.log("usuario correcto");
    // } else{
    //   console.log("usuario incorrecto");
    // }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Incorrect email or password',
      duration: 1000,
      mode: "ios",
      cssClass: "login"
    });
    toast.present();
  }

}
