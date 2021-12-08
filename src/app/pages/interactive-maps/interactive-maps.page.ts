import { Center } from './../../models/center';
import { LocationsService } from './../../services/locations.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-interactive-maps',
  templateUrl: './interactive-maps.page.html',
  styleUrls: ['./interactive-maps.page.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':leave', 
          [
            style({opacity: 1 }),
            animate('.2s ease-out', 
            style({opacity: 0 }))
          ]
        ),
        transition(
          ':enter', 
          [
            style({opacity: 0 }),
            animate('.5s ease-out', 
            style({opacity: 1 }))
          ]
        ),
      ]
    ),
  ]
})
export class InteractiveMapsPage implements OnInit {

  center: Center;

  constructor(public navigationService: NavigationService, public locationsService: LocationsService) { }

  ngOnInit() {
    this.center = this.locationsService.chosenCenter;
  }

}
