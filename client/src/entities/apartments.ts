export interface Apartment {
  id: Number;
  title: String;
  location: String;
  price: String;
  images: Image[];
}

export interface Image {
  id: Number;
  src: String;
  apartment: String;
  apartmentId: Number;
}
