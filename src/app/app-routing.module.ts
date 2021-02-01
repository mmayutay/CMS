import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
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
    path: 'login',
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
    path: 'auxiliary/:type',
    loadChildren: () => import('./pages/auxiliary/auxiliary.module').then( m => m.AuxiliaryPageModule)
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
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
