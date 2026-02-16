import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { orders } from '@/lib/data';
import { Truck } from 'lucide-react';

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  const order = orders.find((o) => o.id === params.id);

  if (!order) {
    notFound();
  }
  
  const getStatusValue = (status: typeof order.status) => {
    switch (status) {
      case 'Processing': return 33;
      case 'Shipped': return 66;
      case 'Delivered': return 100;
      default: return 0;
    }
  }

  return (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Order {order.id}</CardTitle>
                <CardDescription>
                    Placed on {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {order.items.map(item => (
                    <div key={item.product.id} className="flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden">
                            <Image src={item.product.image} alt={item.product.name} fill className="object-cover" data-ai-hint={item.product.imageHint} />
                        </div>
                        <div>
                            <p className="font-semibold">{item.product.name}</p>
                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="ml-auto font-semibold">{item.product.price} AED</p>
                    </div>
                ))}
            </CardContent>
             <CardFooter className="flex justify-between items-center bg-muted/50 p-6">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-lg">{order.total} AED</span>
            </CardFooter>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Truck className="h-6 w-6"/> Tracking</CardTitle>
            </CardHeader>
             <CardContent className="space-y-4">
                <p>Status: <span className="font-semibold text-primary">{order.status}</span></p>
                {order.trackingNumber && <p>Tracking Number: <span className="font-semibold">{order.trackingNumber}</span></p>}
                
                <div className="pt-2">
                    <Progress value={getStatusValue(order.status)} className="w-full" />
                    <div className="grid grid-cols-3 text-xs text-muted-foreground mt-2">
                        <div className="text-left">Processing</div>
                        <div className="text-center">Shipped</div>
                        <div className="text-right">Delivered</div>
                    </div>
                </div>

                <Separator/>

                <div>
                    <h4 className="font-semibold mb-2">Shipping Address</h4>
                    <address className="not-italic text-muted-foreground">
                        {order.shippingAddress.street}<br/>
                        {order.shippingAddress.city}<br/>
                        {order.shippingAddress.country}
                    </address>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
