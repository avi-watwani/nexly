export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageHint: string;
  features: string[];
  material: string;
};

export type Address = {
    id: string;
    street: string;
    city: string;
    country: string;
    isDefault: boolean;
};

export type OrderItem = {
    product: Product;
    quantity: number;
    customization: {
        name: string;
        [key: string]: any;
    };
};

export type Order = {
  id: string;
  date: string;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: Address;
  trackingNumber?: string;
};

export type User = {
    name: string;
    email: string;
    avatarUrl: string;
};
