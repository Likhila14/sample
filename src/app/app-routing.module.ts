import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard1/dashboard/dashboard.component';
import { OrdersComponent } from './dashboard1/orders/orders.component';
import { RecordComponent } from './dashboard1/record/record.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent} ,
  { path: 'orders', component: OrdersComponent} ,
  { path: 'record', component:RecordComponent } ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const routingComponents = [ DashboardComponent,OrdersComponent,RecordComponent]
