export interface Product extends Segment, Category {
  productID: number;
  productName: string;
  productPrice: number;
}

export interface Segment {
  segmentID: number;
  segmentName: string;
}

export interface Category {
  categoryID: number;
  categoryName: string;
}
