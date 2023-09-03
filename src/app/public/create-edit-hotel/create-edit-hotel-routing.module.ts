import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditHotelComponent } from './create-edit-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: CreateEditHotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditHotelRoutingModule { }
