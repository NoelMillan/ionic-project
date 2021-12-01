import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  iconPressed: boolean = false;

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.iconPressed = false;
  }

  cambia(){
    this.iconPressed = !this.iconPressed
  }
}
