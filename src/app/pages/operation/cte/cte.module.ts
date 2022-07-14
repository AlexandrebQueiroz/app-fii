import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbIconModule } from '@nebular/theme';
import { CteComponent, CteService, CteRoutingModule } from './_index';
import { EventsItemComponent } from './events-item/events-item.component';
import { CteItemComponent } from './cte-item/cte-item.component';
import { CteDataComponent } from './cte-data/cte-data.component';

@NgModule({
  imports:
  [
    CteRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    CommonModule,
    NbIconModule,
  ],

  declarations:
  [
    CteComponent,
    EventsItemComponent,
    CteItemComponent,
    CteDataComponent,
  ],

  providers:
  [
    CteService
  ]

})
export class CteModule {
}
