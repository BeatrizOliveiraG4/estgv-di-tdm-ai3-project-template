import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(module => module.UsersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'nav-bar',
    component: NavBarComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
