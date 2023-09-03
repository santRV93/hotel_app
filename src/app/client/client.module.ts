import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientContainerComponent } from './client-container/client-container.component';
import { HeaderClientModule } from '../shared/components/header-client/header-client.module';


@NgModule({
  declarations: [
    ClientContainerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HeaderClientModule
  ]
})
export class ClientModule { }
