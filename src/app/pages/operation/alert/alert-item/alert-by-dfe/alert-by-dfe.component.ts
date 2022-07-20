import { Component, Input, OnInit } from '@angular/core';
import { Alerts } from '../../../../../@core/data/alerts';

@Component({
  selector: 'ngx-alert-by-dfe',
  templateUrl: './alert-by-dfe.component.html',
  styleUrls: ['./alert-by-dfe.component.scss']
})
export class AlertByDfeComponent implements OnInit {

  @Input()
  public alert: Alerts;

  constructor() { }

  ngOnInit(): void {
  }

}
