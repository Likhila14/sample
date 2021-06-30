import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard1/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent} ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [ DashboardComponent,]