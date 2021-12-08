import { LocationsService } from './../../services/locations.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-center',
  templateUrl: './center.page.html',
  styleUrls: ['./center.page.scss'],
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
export class CenterPage implements OnInit {

  centerPressed: boolean = false;
  locationPressed = "Málaga";
  centers = this.locationsService.centers.filter(center => center.location === this.locationPressed);
  locations = this.locationsService.locations;

  option = {
    initialSlide: 1,
    slidesPerView: 1.25,
    centeredSlides: true,
    loop: true,
  };

  iconPressed: boolean = false;

  constructor(public navigationService: NavigationService, public locationsService: LocationsService) {}

  ngOnInit() {
    this.iconPressed = false;
  }

  cambia(){
    this.iconPressed = !this.iconPressed;
  }

  locationChanged(){
    this.centers = this.locationsService.centers.filter(center => center.location === this.locationPressed);
  }

}
