import { NgModule } from '@angular/core';
import { NbButtonModule, NbInputModule, NbSelectModule, NbCardModule } from '@nebular/theme';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    SearchRoutingModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbCardModule,
  ],
  declarations: [
    SearchComponent,
  ],
})
export class SearchModule {
}
