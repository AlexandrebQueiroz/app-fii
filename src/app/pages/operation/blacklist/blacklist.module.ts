import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule, NbSpinnerModule, NbRadioModule } from '@nebular/theme';
import { BlacklistComponent, BlacklistRoutingModule, BlacklistService } from './_index';

@NgModule({
  imports:
  [
    BlacklistRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    CommonModule,
    NbSelectModule,
    NbRadioModule,
  ],

  declarations:
  [
    BlacklistComponent,
  ],

  providers:
  [
    BlacklistService
  ]

})
export class BlacklistModule {
}
