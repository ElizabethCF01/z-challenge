export interface Product {
  id: string;
  name: string;
  brand: string;
  basePrice: number;
  imageUrl: string;
}

export interface Color {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface Specification {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface Storage {
  capacity: string;
  price: number;
}
export interface ProductDetails extends Product {
  description: string;
  ratindg: number;
  similarProducts: Product[];
  specs: Specification;
  colorOptions: Color[];
  storageOptions: Storage[];
}
