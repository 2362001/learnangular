import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcersiceComponent } from './excersice.component';

const routes: Routes = [
  {
    path: '',
    component: ExcersiceComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcersiceRoutingModule {}
