import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderClientRoutingModule } from './header-client-routing.module';
import { HeaderClientComponent } from './header-client.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    HeaderClientComponent
  ],
  exports: [HeaderClientComponent],
  imports: [
    CommonModule,
    HeaderClientRoutingModule,
    MenubarModule
  ]
})
export class HeaderClientModule { }
