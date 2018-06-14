import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StreamListComponent} from "./stream-list/stream-list.component";
import {AuthGuard} from "./auth/auth-guard.service";
import {StreamDetailComponent} from "./stream-detail/stream-detail.component";




const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'stream-list', component: StreamListComponent, canActivate: [AuthGuard]},
  {path: 'stream', component: StreamDetailComponent, canActivate: [AuthGuard]},
  {path: 'stream/:id', component: StreamDetailComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
