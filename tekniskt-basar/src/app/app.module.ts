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
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { StartComponent } from './start/start.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
@NgModule({
  declarations: [
    AppComponent,
    AktivitetsSchemaComponent,
    KlassSchemaComponent,
    NollebokenComponent,
    ForestandareComponent,
    HuvudklassFaddrarComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
