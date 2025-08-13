export interface Book {
  id: number;
  title: string;
  author?: string;
  price: number;
  inStock: boolean;
  newArrival?: boolean;
  description?: string;
}