import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'login/:usertype',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'create-new-user',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'auxiliary/:type',
    loadChildren: () => import('./pages/auxiliary/auxiliary.module').then(m => m.AuxiliaryPageModule)
  },
  {
    path: 'ministries/:type',
    loadChildren: () => import('./pages/ministries/ministries.module').then( m => m.MinistriesPageModule)
  },
  {
    path: 'modal-page',
    loadChildren: () => import('./pages/modal-page/modal-page.module').then( m => m.ModalPagePageModule)
  },
  {
    path: 'my-cell-admin',
    loadChildren: () => import('./pages/my-cell-admin/my-cell-admin.module').then( m => m.MyCellAdminPageModule)
  },
  {
    path: 'reportings',
    loadChildren: () => import('./pages/reportings/reportings.module').then( m => m.ReportingsPageModule)
  },  {
    path: 'dashboard-popover',
    loadChildren: () => import('./pages/dashboard-popover/dashboard-popover.module').then( m => m.DashboardPopoverPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
