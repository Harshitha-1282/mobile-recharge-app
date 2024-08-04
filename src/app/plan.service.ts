import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private apiUrl = 'https://example.com/api'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getPlans(): any {
    return this.http.get(`${this.apiUrl}/plans`);
  }

  getPlan(id: number): any {
    return this.http.get(`${this.apiUrl}/plans/${id}`);
  }

  createPlan(plan: any): any {
    return this.http.post(`${this.apiUrl}/plans`, plan);
  }

  updatePlan(id: number, plan: any): any {
    return this.http.put(`${this.apiUrl}/plans/${id}`, plan);
  }

  deletePlan(id: number): any {
    return this.http.delete(`${this.apiUrl}/plans/${id}`);
  }

}