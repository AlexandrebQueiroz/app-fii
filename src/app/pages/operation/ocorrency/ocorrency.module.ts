import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule, NbSelectModule } from '@nebular/theme';
import { OcorrencyRoutingModule } from './ocorrency-routing.module';
import { OcorrencyComponent } from './ocorrency.component';

@NgModule({
  imports: [
    OcorrencyRoutingModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
  ],
  declarations: [
    OcorrencyComponent,
  ],
})
export class OcorrencyModule {
}
