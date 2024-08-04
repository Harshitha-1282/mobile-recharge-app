import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { PlanComponent } from './plan/plan.component';
import { RechargeComponent } from './recharge/recharge.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'subscriber', component: SubscriberComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'recharge', component: RechargeComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }