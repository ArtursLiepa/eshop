export interface Product extends Segment, Category {
  productID: number;
  productName: string;
  productPrice: number;
}

export interface Segment {
  segmentID: Number;
  segmentName: String;
}

export interface Category {
  categoryID: Number;
  categoryName: String;
}
