import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'listings',
    loadChildren: () =>
      import('./pages/listing/listing.module').then((m) => m.ListingModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
