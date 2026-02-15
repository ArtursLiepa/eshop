import { Component, OnInit } from '@angular/core';
import { gardenThingSegment, gardenThingCategory } from '../../gardenthing';
import { GardenService } from '../../services/garden.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-garden-segment',
  standalone: false,
  templateUrl: './garden-segment.component.html',
  styleUrl: './garden-segment.component.css',
})
export class GardenSegmentComponent implements OnInit {
  segments$: Observable<gardenThingSegment[]>;
  categoryname: string;

  constructor(
    private service: GardenService,
    private activatedRoute: ActivatedRoute
  ) {
    this.service = new GardenService();
  }

  getGardenThingSegmentList() {
    this.activatedRoute.paramMap.subscribe((name) => {
      this.categoryname = name.get('gardenthingCategoryName');
      this.segments$ = this.service.getGardenThingSegmentList(
        this.categoryname
      );
    });
  }

  ngOnInit(): void {
    this.getGardenThingSegmentList();
  }
}
