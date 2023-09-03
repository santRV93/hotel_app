import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { CardModule } from 'primeng/card';
import { HeaderAdminModule } from '../../../shared/components/header-admin/header-admin.module';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CardModule,
    HeaderAdminModule
  ]
})
export class DetailModule { }
