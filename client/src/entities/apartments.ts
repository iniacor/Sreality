export interface Apartment {
  id: number;
  title: string;
  location: string;
  price: string;
  images: Image[];
}

export interface Image {
  id: number;
  src: string;
  apartment: string;
  apartmentId: number;
}
