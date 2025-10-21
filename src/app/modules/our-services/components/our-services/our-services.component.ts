import { Component, OnInit } from '@angular/core';
import { OurServicesService } from '../../services/our-services.service';
import { OurServices } from '../../interfaces/our-services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-our-services',
  standalone: false,
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css',
})
export class OurServicesComponent implements OnInit {
  categories$: Observable<OurServices[]>;

  constructor(private ourServices: OurServicesService) {
    this.ourServices = new OurServicesService();
  }

  private getCategories() {
    this.categories$ = this.ourServices.getServices();
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
