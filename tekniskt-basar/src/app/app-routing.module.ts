import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AktivitetsSchemaComponent } from './aktivitets-schema/aktivitets-schema.component';
import { NollebokenComponent } from './nolleboken/nolleboken.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: 'aktivitetsschema', component: AktivitetsSchemaComponent },
  { path: 'nolleboken', component: NollebokenComponent },
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }