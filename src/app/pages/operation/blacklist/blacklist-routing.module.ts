import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlacklistComponent } from './blacklist.component';

const routes: Routes = [{
  path: '',
  component: BlacklistComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlacklistRoutingModule {
}
