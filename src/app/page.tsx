import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, QrCode, Wifi } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/data';
import ProductCard from '@/components/product-card';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-image');

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-gradient-to-r from-primary/20 to-primary/5">
        <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-between px-4">
          <div className="text-center md:text-left z-10 max-w-2xl">
            <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-foreground-dark">
              The Future of Networking in Dubai
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground-dark">
              Instantly share your contact info, social media, and more with a single tap. Welcome to Nexly.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/products">Explore Cards</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary-foreground-dark hover:bg-primary/10">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
          {heroImage && (
            <div className="relative mt-8 md:mt-0 w-full max-w-md lg:max-w-lg h-64 md:h-auto">
               <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-contain"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          )}
        </div>
      </section>

      <section id="features" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Nexly?</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Our smart business cards are designed for the modern professional in Dubai. Make a lasting impression with cutting-edge technology.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <Wifi className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Instant Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Share your details with a simple tap using NFC technology. No app required for the recipient.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <QrCode className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Dynamic QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">A backup QR code on every card ensures compatibility with all smartphones.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">Sustainable Choice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Reduce paper waste with a single, reusable business card. A smart choice for you and the planet.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Bestsellers</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Discover our most popular smart business cards, crafted from premium materials.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
