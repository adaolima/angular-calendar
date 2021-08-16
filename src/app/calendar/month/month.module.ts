import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthComponent } from './month.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    MonthComponent,
    CellComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [MonthComponent]
})
export class MonthModule { }
