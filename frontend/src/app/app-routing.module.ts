import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagePage } from './pages/homepage/homepage.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { VehiclesListPage } from './pages/vehicles-list/vehicles-list.page';
import { AdminPage } from './pages/admin/admin.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepagePage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'vehicles',
    component: VehiclesListPage,
  },
  {
    path: 'admin-panel',
    component: AdminPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
