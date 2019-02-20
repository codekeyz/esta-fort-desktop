import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainappComponent } from './mainapp.component';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets/widgets.module';
import { RequestComponent } from './request/request.component';
import { PeopleComponent } from './people/people.component';
import { AuthGuard } from '../../guards/auth.guard';

const route: Routes = [
  {
    path: '',
    component: MainappComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'requests',
        component: RequestComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    MainappComponent,
    RequestComponent,
    PeopleComponent
  ],
  imports: [CommonModule, RouterModule.forChild(route), WidgetsModule],
  exports: [RouterModule]
})
export class MainappModule {}
