import { Component, OnInit } from '@angular/core';
import { ShortifyService } from './shortify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shortify-frontend';
  constructor(private shortify: ShortifyService) {}

  ngOnInit() {
  }
}
