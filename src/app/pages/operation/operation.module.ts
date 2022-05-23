import { NgModule } from '@angular/core';
import { OperationRoutingModule } from './operation-routing.module';
import { OperationComponent } from './operation.component';
import { NbInputModule } from '@nebular/theme';

@NgModule({
  imports: [
    OperationRoutingModule,
    NbInputModule,
  ],
  declarations: [
    OperationComponent,
  ],
})
export class OperationModule {
}
