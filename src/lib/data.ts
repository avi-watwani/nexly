import type { Product, Order, User, Address } from './types';
import { PlaceHolderImages } from './placeholder-images';

const findImage = (id: string) => PlaceHolderImages.find((img) => img.id === id)?.imageUrl || '';

export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'onyx-black-card',
    name: 'Onyx Black Card',
    description: 'A sleek and modern card with a matte black finish. Perfect for the minimalist professional.',
    price: 149,
    image: findImage('card-onyx'),
    features: ['NFC Enabled', 'Dynamic QR Code', 'Durable PVC'],
    material: 'Premium PVC',
    imageHint: 'black card',
  },
  {
    id: 'prod_002',
    slug: 'pearl-white-card',
    name: 'Pearl White Card',
    description: 'An elegant and clean card with a glossy white finish. Timeless and sophisticated.',
    price: 149,
    image: findImage('card-pearl'),
    features: ['NFC Enabled', 'Dynamic QR Code', 'Durable PVC'],
    material: 'Premium PVC',
    imageHint: 'white card',
  },
  {
    id: 'prod_003',
    slug: 'sapphire-blue-card',
    name: 'Sapphire Blue Card',
    description: 'A vibrant blue card that stands out. Show your innovative side.',
    price: 159,
    image: findImage('card-sapphire'),
    features: ['NFC Enabled', 'Dynamic QR Code', 'Durable PVC'],
    material: 'Premium PVC',
    imageHint: 'blue card',
  },
  {
    id: 'prod_004',
    slug: 'bamboo-eco-card',
    name: 'Bamboo Eco Card',
    description: 'A sustainable choice made from real bamboo. For the eco-conscious networker.',
    price: 199,
    image: findImage('card-bamboo'),
    features: ['NFC Enabled', 'Dynamic QR Code', 'Sustainable Bamboo'],
    material: 'Natural Bamboo',
    imageHint: 'bamboo card',
  },
  {
    id: 'prod_005',
    slug: 'gold-metal-card',
    name: 'Gold Metal Card',
    description: 'The ultimate statement of luxury. A 24k gold-plated metal card.',
    price: 499,
    image: findImage('card-gold'),
    features: ['NFC Enabled', 'Dynamic QR Code', 'Laser Engraved'],
    material: '24k Gold-Plated Metal',
    imageHint: 'gold card',
  },
  {
    id: 'prod_006',
    slug: 'brushed-metal-card',
    name: 'Brushed Metal Card',
    description: 'A durable and impressive card made from brushed stainless steel.',
    price: 399,
    image: findImage('card-metal'),
    features: ['NFC Enabled', 'Dynamic QR Code', 'Laser Engraved'],
    material: 'Stainless Steel',
    imageHint: 'metal card',
  },
];

export const orders: Order[] = [
  {
    id: 'ORD-2024-001',
    date: '2024-07-15',
    status: 'Delivered',
    total: 149,
    items: [{ product: products[0], quantity: 1, customization: { name: 'John Doe' } }],
    shippingAddress: {
      id: 'addr_1',
      street: '123 Sheikh Zayed Road',
      city: 'Dubai',
      country: 'UAE',
      isDefault: true,
    },
    trackingNumber: 'DXB123456789',
  },
  {
    id: 'ORD-2024-002',
    date: '2024-07-20',
    status: 'Shipped',
    total: 399,
    items: [{ product: products[5], quantity: 1, customization: { name: 'Jane Smith' } }],
    shippingAddress: {
      id: 'addr_1',
      street: '123 Sheikh Zayed Road',
      city: 'Dubai',
      country: 'UAE',
      isDefault: true,
    },
    trackingNumber: 'DXB987654321',
  },
  {
    id: 'ORD-2024-003',
    date: '2024-07-22',
    status: 'Processing',
    total: 199,
    items: [{ product: products[3], quantity: 1, customization: { name: 'Ahmed Al Futtaim' } }],
     shippingAddress: {
      id: 'addr_2',
      street: '456 Al Khail Road',
      city: 'Dubai',
      country: 'UAE',
      isDefault: false,
    },
  },
];

export const user: User = {
  name: 'Farah Al-Mansoori',
  email: 'farah.almansoori@example.com',
  avatarUrl: findImage('user-avatar'),
};

export const addresses: Address[] = [
  {
    id: 'addr_1',
    street: 'Villa 12, Jumeirah 1',
    city: 'Dubai',
    country: 'United Arab Emirates',
    isDefault: true,
  },
  {
    id: 'addr_2',
    street: 'Apt 2501, Burj Khalifa',
    city: 'Dubai',
    country: 'United Arab Emirates',
    isDefault: false,
  },
];
