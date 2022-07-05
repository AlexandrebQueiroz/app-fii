import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { OccurrenceComponent, OccurrenceRoutingModule, OccurrenceService } from './_index';

@NgModule({
  imports:
  [
    OccurrenceRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    CommonModule,
  ],

  declarations:
  [
    OccurrenceComponent,
  ],

  providers:
  [
    OccurrenceService
  ]

})
export class OccurrenceModule {
}
