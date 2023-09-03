import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEditHotelRoutingModule } from './create-edit-hotel-routing.module';
import { CreateEditHotelComponent } from './create-edit-hotel.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderAdminModule } from '../../shared/components/header-admin/header-admin.module';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  declarations: [
    CreateEditHotelComponent
  ],
  imports: [
    CommonModule,
    CreateEditHotelRoutingModule,
    HeaderAdminModule,
    CardModule,
    SharedModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    SelectButtonModule
  ]
})
export class CreateEditHotelModule { }
