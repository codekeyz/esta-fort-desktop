import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  { path: '', redirectTo: 'me', pathMatch: 'prefix' },
  {
    path: 'me',
    loadChildren: './components/mainapp/mainapp.module#MainappModule'
  },
  {
    path: 'auth',
    loadChildren: './components/auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
