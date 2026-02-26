export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'racket' | 'shoes' | 'shuttlecock' | 'bag' | 'apparel' | 'accessory' | 'string';
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specs: Record<string, string>;
  vendorId: string;
  vendorName: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  tags: string[];
}

export interface Vendor {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  productCount: number;
  rating: number;
  joinedDate: string;
  featured: boolean;
}

export interface AcademyClass {
  id: string;
  title: string;
  coach: string;
  coachImage: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  description: string;
  schedule: string;
  duration: string;
  maxStudents: number;
  currentStudents: number;
  price: number;
  location: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Reservation {
  classId: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}
