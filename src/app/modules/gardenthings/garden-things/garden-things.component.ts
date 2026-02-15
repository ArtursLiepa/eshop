import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { gardenThingSegment, gardenThingCategory } from '../gardenthing';
import { GardenService } from '../services/garden.service';

@Component({
  selector: 'app-garden-things',
  standalone: false,
  templateUrl: './garden-things.component.html',
  styleUrl: './garden-things.component.css',
})
export class GardenThingsComponent implements OnInit {
  categories$: Observable<gardenThingCategory[]>;

  constructor(private gardenService: GardenService) {
    this.gardenService = new GardenService();
  }

  getGardenThingSegmentList() {
    this.categories$ = this.gardenService.getGardenThingCategoryList();
  }

  ngOnInit(): void {
    this.getGardenThingSegmentList();
  }
}
