import { Component, Input } from '@angular/core';
import { Alerts } from '../../../../@core/data/alerts';

@Component({
  selector: 'ngx-alert-item',
  styleUrls: ['./alert-item.component.scss'],
  templateUrl: `./alert-item.component.html`,
})
export class AlertItemComponent {

  @Input()
  public alert: Alerts;

}
