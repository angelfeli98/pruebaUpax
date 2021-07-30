import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit{
  title = 'upaxPrueba';
  showFiller = true;

  constructor() {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
  }
}
