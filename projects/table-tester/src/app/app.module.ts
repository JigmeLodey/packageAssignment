import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MyTableModule} from '../../../my-table/src/lib/my-table.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MyTableModule,
    MatCardModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
