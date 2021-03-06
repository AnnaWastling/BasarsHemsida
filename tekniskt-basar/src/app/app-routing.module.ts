import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AktivitetsSchemaComponent } from './aktivitets-schema/aktivitets-schema.component';
import { KlasschemaComponent } from './klasschema/klasschema.component';
import { NollebokenComponent } from './nolleboken/nolleboken.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'aktivitetsschema', component: AktivitetsSchemaComponent },
  { path: 'nolleboken', component: NollebokenComponent },
  { path: 'klasschema', component: KlasschemaComponent },
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }