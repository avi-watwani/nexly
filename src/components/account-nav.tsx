'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Home, Package, MapPin, User, LogOut } from 'lucide-react';

const navLinks = [
  { href: '/account', label: 'Profile', icon: User },
  { href: '/account/orders', label: 'Orders', icon: Package },
  { href: '/account/addresses', label: 'Addresses', icon: MapPin },
];

export function AccountNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Button
            key={link.href}
            asChild
            variant={isActive ? 'default' : 'ghost'}
            className={cn('justify-start gap-2', {
                'bg-primary text-primary-foreground hover:bg-primary/90': isActive,
            })}
          >
            <Link href={link.href}>
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          </Button>
        );
      })}
       <Button
            variant={'ghost'}
            className='justify-start gap-2 text-destructive hover:bg-destructive/10 hover:text-destructive'
          >
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </Button>
    </nav>
  );
}
