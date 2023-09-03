import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RoleGuard } from './core/guards/role.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: () =>
      import('./public/public.module').then(m => m.PublicModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ["ADMIN"] }
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('./client/client.module').then(m => m.ClientModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ["CLIENT"] }
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [LoggedGuard]
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
