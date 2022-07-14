import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpassComponent } from './register-pass.component';

const routes: Routes = [{
  path: '',
  component: RegisterpassComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPassRoutingModule {
}
