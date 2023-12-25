import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  category: string;
  isFeatured: boolean;
  image: string;
}

export interface Products {
  products: Product[];
}
export interface Perks {
  name: string;
  Icon: LucideIcon;
  description: string;
}
