export enum ViewMode {
  HOME = 'home',
  LEGAL = 'legal',
  REAL_ESTATE = 'real_estate'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  beds: number;
  baths: number;
  garages?: number;
  area: string;
  description?: string;
  imageUrls?: string[];
  videoUrl?: string;
  approved?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}