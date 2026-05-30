export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: {
    url: string;
    public_id: string;
  }[];
   category: {
    _id: string;
    name: string;
  };
  available: boolean;
  isFeatured: boolean;
}