import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ModuleShare } from '../common/ng-zorro-antd.module';
import { ExcersiceModule } from './excersice/excersice.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, ModuleShare, ExcersiceModule],
})
export class PagesModule {}
