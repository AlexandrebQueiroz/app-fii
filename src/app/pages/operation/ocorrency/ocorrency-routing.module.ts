import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrencyComponent } from './ocorrency.component';

const routes: Routes = [{
  path: '',
  component: OcorrencyComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcorrencyRoutingModule {
}
