import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekComponent } from './week.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  declarations: [
    WeekComponent,
    CellComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [WeekComponent]
})
export class WeekModule { }
