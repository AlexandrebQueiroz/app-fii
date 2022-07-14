import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationComponent } from './operation.component';

const routes: Routes = [{
  path: '',
  component: OperationComponent,
  children: [
    {
      path: 'alert',
      loadChildren: () => import('./alert/alert.module')
        .then(m => m.AlertModule),
    },
    {
      path: 'occurrence',
      loadChildren: () => import('./occurrence/occurrence.module')
        .then(m => m.OccurrenceModule),
    },
    {
      path: 'oversight',
      loadChildren: () => import('./oversight/oversight.module')
        .then(m => m.OversightModule),
    },
    {
      path: 'cte',
      loadChildren: () => import('./cte/cte.module')
        .then(m => m.CteModule),
    },
    {
      path: 'blacklist',
      loadChildren: () => import('./blacklist/blacklist.module')
        .then(m => m.BlacklistModule),
    },
    {
      path: 'register-pass',
      loadChildren: () => import('./register-pass/register-pass.module')
        .then(m => m.RegisterPassModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationRoutingModule {
}
