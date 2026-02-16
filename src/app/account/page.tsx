import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { user } from '@/lib/data';

export default function AccountProfilePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">My Profile</CardTitle>
        <CardDescription>Manage your personal information.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 rounded-full overflow-hidden">
                <Image src={user.avatarUrl} alt={user.name} fill className="object-cover" data-ai-hint="person avatar"/>
            </div>
            <Button variant="outline">Change Photo</Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" defaultValue={user.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" defaultValue={user.email} />
        </div>
         <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
}
