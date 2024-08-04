import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

interface PaymentMethod {
  id: number;
  name: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentMethods: PaymentMethod[] = [];
  selectedPaymentMethod: PaymentMethod | null = null;
  paymentAmount: number | null = null;

  constructor(private paymentService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    // Call the backend API to get the payment methods
    this.paymentService.getPaymentMethods().subscribe((paymentMethods) => {
      this.paymentMethods = paymentMethods;
    });
  }

  selectPaymentMethod(paymentMethod: PaymentMethod): void {
    this.selectedPaymentMethod = paymentMethod;
  }

  makePayment(): void {
    // Call the backend API to make the payment
    if (this.selectedPaymentMethod && this.paymentAmount) {
      this.paymentService.makePayment(this.selectedPaymentMethod, this.paymentAmount).subscribe(() => {
        // Navigate to the confirmation page
        this.router.navigate(['/confirmation']);
      });
    } else {
      console.error('Please select a payment method and enter a payment amount');
    }
  }
}