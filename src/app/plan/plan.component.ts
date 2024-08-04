import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  plans: any[] = [];

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    // Call the backend API to get the plans
    this.planService.getPlans().subscribe((plans: any[]) => {
      this.plans = plans;
    });
  }
}