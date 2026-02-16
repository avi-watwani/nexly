import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const total = 149;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h1 className="font-headline text-3xl font-bold mb-6">Checkout</h1>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Shipping Information</CardTitle>
                <CardDescription>Enter your delivery address in Dubai.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="e.g., Villa 12, Jumeirah 1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" value="Dubai" readOnly />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" value="United Arab Emirates" readOnly />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Payment Details</CardTitle>
                 <CardDescription>All transactions are secure and encrypted.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <div className="relative">
                    <Input id="card-number" placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM / YY" />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <p>Onyx Black Card x 1</p>
                <p>{total} AED</p>
              </div>
              <Separator />
               <div className="flex justify-between">
                <p className="text-muted-foreground">Subtotal</p>
                <p>{total} AED</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Shipping</p>
                <p>Free</p>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <p>Total</p>
                <p>{total} AED</p>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-stretch gap-4">
              <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Link href="/account/orders">Place Order</Link>
              </Button>
              <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                <Lock className="h-3 w-3" /> Secure Checkout
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
