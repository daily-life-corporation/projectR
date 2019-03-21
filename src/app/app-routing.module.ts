import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'view', loadChildren: './view/view.module#ViewModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'profile/:id', loadChildren: './profile/profile.module#ProfileModule' },
  { path: 'update', loadChildren: './update/update.module#UpdateModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
