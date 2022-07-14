import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CteComponent } from './cte.component';

const routes: Routes = [{
  path: '',
  component: CteComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CteRoutingModule {
}
