import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Alerts } from '../../../@core/data/alerts';

@Component({
  selector: 'ngx-alert',
  templateUrl: `./alert.component.html`,
})
export class AlertComponent implements OnInit  {

  public alerts: Alerts[];

  constructor(public service: AlertService){

  }

  ngOnInit(): void {
    this.service.get().subscribe(
      alerts => {
        this.alerts = alerts;
      }
    )
  }

}
