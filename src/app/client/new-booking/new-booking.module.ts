import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NewBookingRoutingModule } from './new-booking-routing.module';
import { NewBookingComponent } from './new-booking.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    NewBookingComponent
  ],
  imports: [
    CommonModule,
    NewBookingRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ToastModule
  ]
})
export class NewBookingModule { }
