import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'adif-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private _routerSub = Subscription.EMPTY;
  title = 'adif';
  isCierresActive = true;
  isProvisionesActionActive = false;
  showMenu = false;
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.router.url);
    this._routerSub = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
          )
         .subscribe((activeRoute: NavigationEnd) => {
          !activeRoute.url.includes('provisiones-asscoadas') ? this.isCierresActive = true : this.isCierresActive = false;
         });
  }

  ngOnDestroy() {
    this._routerSub.unsubscribe();
  }

  show() {
    this.showMenu = !this.showMenu;
  }
}
