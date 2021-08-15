import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekComponent } from './week.component';
import { CellComponent } from './cell/cell.component';


@NgModule({
  imports: [
    CommonModule
  ], 
  declarations: [
    WeekComponent,
    CellComponent
  ],
  exports: [WeekComponent]
})
export class WeekModule { }
