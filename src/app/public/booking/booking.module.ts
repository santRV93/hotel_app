import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { HeaderAdminModule } from '../../shared/components/header-admin/header-admin.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    HeaderAdminModule,
    CardModule,
    TableModule,
    ButtonModule
  ]
})
export class BookingModule { }
