export interface gardenThingCategory {
  gardenThingCategoryID: number;
  gardenthingCategoryName: string;
}

export interface gardenThingSegment {
  gardenThingSegmentID: number;
  gardenthingSegmentName: string;
}

export interface gardenThingsSubSegment {
  gardenThingSubSegmentID: number;
  gardenthingSubSegmentName: string;
}

export interface Gardenthing
  extends gardenThingCategory,
    gardenThingSegment,
    gardenThingsSubSegment {
  gardenThingID: number;
  gardenThingName: string;
  gardenThingPrice: number;
}
