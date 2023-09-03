import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { IndexComponent } from './index/index.component';
import { MenuAdminComponent } from '../shared/components/menu-admin/menu-admin.component';


@NgModule({
  declarations: [
    IndexComponent,
    MenuAdminComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
