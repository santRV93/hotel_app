import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelComponent } from './hotel.component';
import { SharedModule } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HeaderAdminModule } from '../../shared/components/header-admin/header-admin.module';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    SharedModule,
    TableModule,
    CardModule,
    ButtonModule,
    HeaderAdminModule,
    ToastModule
  ]
})
export class HotelModule { }
