import Link from 'next/link';
import { Logo } from './logo';
import { Icons } from './icons';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm">
              The future of networking in Dubai.
            </p>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Products</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="/products/onyx-black-card" className="text-muted-foreground hover:text-foreground">Onyx Black Card</Link></li>
              <li><Link href="/products/gold-metal-card" className="text-muted-foreground hover:text-foreground">Gold Metal Card</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-semibold">Connect</h4>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Icons.twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Icons.instagram className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Icons.linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexly Dubai. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
             <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
