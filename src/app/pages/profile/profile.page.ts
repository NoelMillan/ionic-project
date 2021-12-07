import { Router } from '@angular/router';
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
  user: User = this.userService.userLogged;

  constructor(public navigationService: NavigationService, public userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.iconPressed = false;
  }

  cambia(){
    this.iconPressed = !this.iconPressed
  }

  show(){
    this.router.navigateByUrl('home')
  }

}
