import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'https://example.com/api/payment';

  constructor(private http: HttpClient) { }

  getPaymentMethods(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/methods`);
  }

  makePayment(paymentMethod: any, paymentAmount: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/make-payment`, {
      paymentMethod: paymentMethod,
      paymentAmount: paymentAmount
    });
  }

}