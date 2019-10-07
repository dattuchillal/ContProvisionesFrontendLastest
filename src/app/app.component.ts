import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'adif-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adif';
  showMenu = false;
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

  show() {
    this.showMenu = !this.showMenu;
  }
}
