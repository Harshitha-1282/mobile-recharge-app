import { Component, OnInit } from '@angular/core';
import { RechargeService } from '../recharge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  paymentMethods: any[] = [];
  selectedPaymentMethod: any = null;
  paymentAmount: number | null = null;

  constructor(private router: Router, private rechargeService: RechargeService) { }

  ngOnInit(): void {
    this.rechargeService.getPaymentMethods().subscribe((paymentMethods) => {
      this.paymentMethods = paymentMethods;
    });
  }

  selectPaymentMethod(paymentMethod: any): void {
    this.selectedPaymentMethod = paymentMethod;
  }

  recharge(): void {
    this.makeRecharge();
  }

  makeRecharge(): void {
    if (this.selectedPaymentMethod && this.paymentAmount) {
      this.rechargeService.makePayment(this.selectedPaymentMethod, this.paymentAmount).subscribe({
        next: (response) => {
          if (response.success) {
            this.router.navigate(['/confirmation']);
          } else {
            console.error(response.message);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Please select a payment method and enter a payment amount');
    }
  }
}