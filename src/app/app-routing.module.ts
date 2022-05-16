import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { UserAddComponent } from './admin/user-add/user-add.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    // canActivate: [AuthGuardService],
    component: AdminComponent,
    children: [
      { path: 'user', component: UserListComponent },
      {
        path: 'user-add',
        component: UserAddComponent,
      },
    ],
  },
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
