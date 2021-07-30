
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SwiperModule } from 'swiper/angular';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    SwiperModule,
    CommonModule
  ],
  exports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }
