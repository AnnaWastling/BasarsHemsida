import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AktivitetsSchemaComponent } from './aktivitets-schema/aktivitets-schema.component';
import { NollebokenComponent } from './nolleboken/nolleboken.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { StartComponent } from './start/start.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaterialElevationDirective } from './elevation.directive';
import { KlasschemaComponent } from './klasschema/klasschema.component';


@NgModule({
  declarations: [
    AppComponent,
    AktivitetsSchemaComponent,
    NollebokenComponent,
    StartComponent,
    MaterialElevationDirective,
    KlasschemaComponent,
    
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
    LayoutModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
