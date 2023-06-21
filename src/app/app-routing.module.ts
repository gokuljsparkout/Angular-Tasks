import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('src/app/pages/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('src/app/pages/register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('src/app/pages/login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
