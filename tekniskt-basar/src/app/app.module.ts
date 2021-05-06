import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AktivitetsSchemaComponent } from './aktivitets-schema/aktivitets-schema.component';
import { KlassSchemaComponent } from './klass-schema/klass-schema.component';
import { NollebokenComponent } from './nolleboken/nolleboken.component';
import { ForestandareComponent } from './forestandare/forestandare.component';
import { HuvudklassFaddrarComponent } from './huvudklass-faddrar/huvudklass-faddrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AktivitetsSchemaComponent,
    KlassSchemaComponent,
    NollebokenComponent,
    ForestandareComponent,
    HuvudklassFaddrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
