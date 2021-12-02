import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.page.html',
  styleUrls: ['./center.page.scss'],
})
export class CenterPage implements OnInit {

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
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
