import { User } from './../../models/user';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  iconPressed: boolean = false;
  user = this.userService.userLogged;

  constructor(public navigationService: NavigationService, public userService: UsersService) { }

  ngOnInit() {
    this.iconPressed = false;
  }

  cambia(){
    this.iconPressed = !this.iconPressed
  }

  show(){
    console.log(this.userService.userLogged)
  }

}
