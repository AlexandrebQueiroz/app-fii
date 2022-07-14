import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { RegisterpassComponent, RegisterPassRoutingModule, RegisterPassService } from './_index';

@NgModule({
  imports:
  [
    RegisterPassRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    CommonModule,
    NbTabsetModule,
    NbRadioModule,
  ],

  declarations:
  [
    RegisterpassComponent,
  ],

  providers:
  [
    RegisterPassService
  ]

})
export class RegisterPassModule {
}
