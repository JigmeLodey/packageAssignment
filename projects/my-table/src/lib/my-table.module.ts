import { NgModule } from '@angular/core';
import { MyTableComponent } from './my-table.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [MyTableComponent],
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  exports: [MyTableComponent, FormsModule]
})
export class MyTableModule { }
