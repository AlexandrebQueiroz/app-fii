import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbAccordionModule } from '@nebular/theme';
import { OversightComponent, OversightRoutingModule, OversightService } from './_index';

@NgModule({
  imports:
  [
    OversightRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    CommonModule,
    NbAccordionModule,
  ],

  declarations:
  [
    OversightComponent,
  ],

  providers:
  [
    OversightService
  ]

})
export class OversightModule {
}
