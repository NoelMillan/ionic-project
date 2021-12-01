import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  iconPressed: boolean = false;

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.iconPressed = false;
  }

  cambia(){
    this.iconPressed = !this.iconPressed
  }

}
