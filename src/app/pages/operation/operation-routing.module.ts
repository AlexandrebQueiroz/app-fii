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
      path: 'seachmdfe',
      loadChildren: () => import('./search/search-routing.module')
        .then(m => m.SearchRoutingModule),
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationRoutingModule {
}
