import { LocationModalComponent } from './../../components/location-modal/location-modal.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.page.html',
  styleUrls: ['./center.page.scss'],
})
export class CenterPage implements OnInit {

  fondo: boolean = true;

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
  };

  iconPressed: boolean = false;

  constructor(public navigationService: NavigationService) { }

  ngOnInit() {
    this.iconPressed = false;
  }

  cambia(){
    this.iconPressed = !this.iconPressed;
  }

}
