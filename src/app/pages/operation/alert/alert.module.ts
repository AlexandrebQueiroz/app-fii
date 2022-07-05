import { NgModule } from '@angular/core';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { AlertItemComponent } from './alert-item/alert-item.component';
import { NbCardModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AlertRoutingModule,
    NbCardModule,
  ],
  declarations: [
    AlertComponent,
    AlertItemComponent,
  ],
})
export class AlertModule {
}
