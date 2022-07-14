import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OversightComponent } from './oversight.component';

const routes: Routes = [{
  path: '',
  component: OversightComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OversightRoutingModule {
}
