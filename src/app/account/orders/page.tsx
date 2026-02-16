import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { orders } from '@/lib/data';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">My Orders</CardTitle>
        <CardDescription>View your order history and track your deliveries.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge
                    className={cn({
                      'bg-green-100 text-green-800': order.status === 'Delivered',
                      'bg-blue-100 text-blue-800': order.status === 'Shipped',
                      'bg-yellow-100 text-yellow-800': order.status === 'Processing',
                      'bg-red-100 text-red-800': order.status === 'Cancelled',
                    })}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.total} AED</TableCell>
                <TableCell>
                   <Button asChild variant="ghost" size="icon">
                     <Link href={`/account/orders/${order.id}`}>
                        <ArrowRight className="h-4 w-4" />
                     </Link>
                   </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
