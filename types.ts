
export type Language = 'en' | 'fr' | 'ar';

export interface TranslatedContent {
  [key: string]: string;
}

export interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  images: string[];
}

export interface TeamMember {
  id: number;
  image: string;
}

export interface Testimonial {
  id: number;
}

export interface Offer {
  id: string;
  image: string;
  endDate: string;
}

export interface BeautyTip {
  id: string;
  image: string;
}

export interface BeforeAfterImage {
    id: number;
    before: string;
    after: string;
}
