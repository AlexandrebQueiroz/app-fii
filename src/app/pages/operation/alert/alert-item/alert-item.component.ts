import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alerts } from '../../../../@core/data/alerts';

@Component({
  selector: 'ngx-alert-item',
  styleUrls: ['./alert-item.component.scss'],
  templateUrl: `./alert-item.component.html`,
})
export class AlertItemComponent {

  @Input()
  public alert: Alerts;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    ){
  }

  gotoMap(){
    sessionStorage.setItem(`[alert][goto][maps]`, JSON.stringify(this.alert.geo));
    this.router.navigate([ '../../maps/gmaps' ], { relativeTo: this.activeRouter.parent });
  }

  gotoDFE(key: string){
    sessionStorage.setItem(`[alert][goto][dfe]`, JSON.stringify(key));
    this.router.navigate([ '../cte' ], { relativeTo: this.activeRouter.parent });
  }
}
