import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcersiceRoutingModule } from './excersice-routing.module';
import { ExcersiceComponent } from './excersice.component';


@NgModule({
  declarations: [
    ExcersiceComponent
  ],
  imports: [
    CommonModule,
    ExcersiceRoutingModule
  ]
})
export class ExcersiceModule { }
