import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AktivitetsSchemaComponent } from './aktivitets-schema/aktivitets-schema.component';
import { ForestandareComponent } from './forestandare/forestandare.component';
import { HuvudklassFaddrarComponent } from './huvudklass-faddrar/huvudklass-faddrar.component';
import { KlassSchemaComponent } from './klass-schema/klass-schema.component';
import { NollebokenComponent } from './nolleboken/nolleboken.component';

const routes: Routes = [
  { path: 'aktivitetsschema', component: AktivitetsSchemaComponent },
  { path: 'forestandare', component: ForestandareComponent },
  { path: 'huvudklassfaddrar', component: HuvudklassFaddrarComponent },
  { path: 'klasschema', component: KlassSchemaComponent },
  { path: 'nolleboken', component: NollebokenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }