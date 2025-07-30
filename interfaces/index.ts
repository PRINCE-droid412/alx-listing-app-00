// TypeScript Interfaces for ALX Listing App
import { ReactNode } from 'react';
// Interface for Card Component Props
export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price?: string;  // Optional price field
}

// Interface for Button Component Props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;  // Allow custom styling via Tailwind classes
}

// interfaces/index.ts

export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
   hostName?: string;
  hostEmail?: string;
   description: string;
  reviews: any[]; // Assuming reviews is an array of objects}
}


