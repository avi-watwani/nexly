import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/lib/data';
import { Separator } from '@/components/ui/separator';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function CartPage() {
  const cartItem = products[0]; // Mock cart item
  const quantity = 1;
  const price = cartItem.price;
  const total = price * quantity;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 rounded-md overflow-hidden">
                  <Image src={cartItem.image} alt={cartItem.name} fill className="object-cover" data-ai-hint={cartItem.imageHint}/>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{cartItem.name}</h3>
                  <p className="text-sm text-muted-foreground">Customized Card</p>
                  <p className="text-sm font-semibold mt-1">{price} AED</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input readOnly value={quantity} className="h-8 w-12 text-center" />
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-5 w-5 text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <p className="text-muted-foreground">Subtotal</p>
                <p>{total} AED</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Shipping</p>
                <p>Calculated at checkout</p>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>{total} AED</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
