export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string; // Lucide icon identifier
  isFeatured?: boolean;
  tag?: string;
  basePrice: string;
  estimatedTime: string;
  symptoms: string[];
  benefits: string[];
}

export interface Review {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  comment: string;
  avatarUrl: string;
  date: string;
}

export interface GalleryVehicle {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
}

export interface QuoteRequest {
  vehicleType: string;
  brand: string;
  model: string;
  services: string[];
  name: string;
  phone: string;
  notes: string;
}
