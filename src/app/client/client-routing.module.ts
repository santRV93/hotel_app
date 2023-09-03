import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientContainerComponent } from './client-container/client-container.component';

const routes: Routes = [
  {
    path: '',
    component: ClientContainerComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'nueva-reserva/:initDate/:endDate/:id',
        loadChildren: () =>
          import('./new-booking/new-booking.module').then(m => m.NewBookingModule),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
