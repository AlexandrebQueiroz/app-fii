import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { Alerts } from '../../../@core/data/alerts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-alert',
  templateUrl: `./alert.component.html`,
})
export class AlertComponent implements OnInit  {

  public alerts: Alerts[];

  constructor(
    public service: AlertService,
    public router: Router,
    public activeRouter: ActivatedRoute,
    ){

  }

  ngOnInit(): void {
    this.service.get().subscribe(
      alerts => {
        this.alerts = alerts;
      }
    )
  }

}
