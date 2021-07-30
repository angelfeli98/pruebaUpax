import { Component } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import Swiper from 'swiper';
SwiperCore.use([Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public numeros: any[] = [1, 2, 3, 4, 5];

  constructor() {
  }


}
