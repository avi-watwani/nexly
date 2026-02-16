import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductCustomizationForm } from '@/components/product-customization-form';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col items-center">
            <div className="relative aspect-[3/2] w-full max-w-lg bg-card rounded-lg shadow-md overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-ai-hint={product.imageHint}
                    priority
                />
            </div>
            <div className="mt-8 w-full max-w-lg">
                <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
                <p className="text-3xl font-bold mt-4 text-primary">{product.price} AED</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">{product.material}</Badge>
                </div>
                <ul className="mt-6 space-y-2 text-muted-foreground">
                    {product.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="max-w-xl mx-auto md:mx-0">
          <ProductCustomizationForm />
        </div>
      </div>
    </div>
  );
}
