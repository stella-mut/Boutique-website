export type Department = "Women" | "Men" | "Kids";

export interface Subcategory {
  name: string;
  href: string;
}

export interface DepartmentTile {
  department: Department;
  tagline: string;
  image: string;
  href: string;
  subcategories: Subcategory[];
}

export interface Product {
  id: string;
  name: string;
  department: Department;
  category: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  colors: string[];
  sizes: string[];
  image: string;
  imageAlt: string;
  isNew?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tag: string;
}

export interface LookbookLook {
  id: string;
  title: string;
  image: string;
  products: { name: string; price: number }[];
}

export interface CategoryTile {
  name: string;
  image: string;
  href: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface PressMention {
  outlet: string;
  quote: string;
}
