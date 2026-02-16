import { Nfc } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Nfc className="h-7 w-7 text-primary" />
      <span className="font-headline text-xl font-bold">CardConnect</span>
    </div>
  );
}
