import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PaymentMethod {
  id: number;
  name: string;
  // Add other properties as needed
}

interface RechargeResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class RechargeService {

  private apiUrl = 'https://your-api-url.com'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPaymentMethods(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(`${this.apiUrl}/payment-methods`);
  }

  makePayment(paymentMethod: PaymentMethod, amount: number): Observable<RechargeResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const payload = {
      paymentMethodId: paymentMethod.id,
      amount
    };

    return this.http.post<RechargeResponse>(`${this.apiUrl}/recharge`, payload, { headers });
  }

}