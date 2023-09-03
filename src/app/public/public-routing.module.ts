import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'hoteles',
        loadChildren: () =>
          import('./hotel/hotel.module').then(m => m.HotelModule),
      },
      {
        path: 'hoteles/:action',
        loadChildren: () =>
          import('./create-edit-hotel/create-edit-hotel.module').then(m => m.CreateEditHotelModule),
      },
      {
        path: 'hoteles/:action/:id',
        loadChildren: () =>
          import('./create-edit-hotel/create-edit-hotel.module').then(m => m.CreateEditHotelModule),
      },
      {
        path: 'reservas',
        loadChildren: () =>
          import('./booking/booking.module').then(m => m.BookingModule),
      },
      {
        path: 'reservas/detalle/:id',
        loadChildren: () =>
          import('./booking/detail/detail.module').then(m => m.DetailModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
