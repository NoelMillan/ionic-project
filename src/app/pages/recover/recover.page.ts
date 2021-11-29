import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
})
export class RecoverPage implements OnInit {

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
  }

}
