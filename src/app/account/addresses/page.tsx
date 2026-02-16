import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { addresses } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { MoreVertical, Plus } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function AddressesPage() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
            <CardTitle className="font-headline">My Addresses</CardTitle>
            <CardDescription>Manage your shipping addresses.</CardDescription>
        </div>
        <Button>
            <Plus className="mr-2 h-4 w-4" /> Add New Address
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="p-4 border rounded-lg flex items-start justify-between">
            <div>
              {address.isDefault && <Badge className="mb-2">Default</Badge>}
              <address className="not-italic text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">{address.street}</p>
                <p>{address.city}</p>
                <p>{address.country}</p>
              </address>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Set as Default</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
