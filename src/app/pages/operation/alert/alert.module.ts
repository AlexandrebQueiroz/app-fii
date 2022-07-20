import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../../@theme/theme.module';
import { AlertByDfeComponent } from './alert-item/alert-by-dfe/alert-by-dfe.component';
import { AlertByPlateComponent } from './alert-item/alert-by-plate/alert-by-plate.component';
import { AlertItemComponent } from './alert-item/alert-item.component';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule,
    AlertRoutingModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    ThemeModule,
  ],
  declarations: [
    AlertComponent,
    AlertItemComponent,
    AlertByPlateComponent,
    AlertByDfeComponent,
  ],
  providers:[
    AlertService
  ]
})
export class AlertModule {
}
