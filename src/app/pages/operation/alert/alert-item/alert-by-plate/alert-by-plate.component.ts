import { Component, Input, OnInit } from '@angular/core';
import { Alerts } from '../../../../../@core/data/alerts';

@Component({
  selector: 'ngx-alert-by-plate',
  templateUrl: './alert-by-plate.component.html',
  styleUrls: ['./alert-by-plate.component.scss']
})
export class AlertByPlateComponent implements OnInit {

  @Input()
  public alert: Alerts;

  constructor() { }

  ngOnInit(): void {
  }

}
