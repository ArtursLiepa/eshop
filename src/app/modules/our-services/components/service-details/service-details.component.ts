import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceDetailService } from './service-detail.service';
import { OurServiceDetails } from '../../interfaces/our-service-details';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-details',
  standalone: false,
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css',
})
export class ServiceDetailsComponent implements OnInit {
  serviceName: String;
  service: OurServiceDetails;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceType: ServiceDetailService
  ) {
    this.serviceType = new ServiceDetailService();
  }

  private getService() {
    this.activatedRoute.paramMap.subscribe((name) => {
      this.serviceName = name.get('name');
      this.serviceType
        .getService(this.serviceName)
        .subscribe((data) => (this.service = data));
    });
  }

  ngOnInit(): void {
    this.getService();
  }
}
