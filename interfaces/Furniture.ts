import { StaticImageData } from "next/image";

export interface Furniture {
  id: string;
  alt?: string;
  name: string;
  price: string;
  description: string;
  image: StaticImageData;
}