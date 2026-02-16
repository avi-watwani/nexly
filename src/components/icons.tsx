import type { SVGProps } from "react";

export const Icons = {
  twitter: (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 1.6 3.6 0 5.1-1.6 1.5-4.5 2.5-8 2.5s-6.4-1-8-2.5c-1.6-1.5-1.6-3.6 0-5.1s.7-2.1 2-3.4l1.2-1.6c.4-.5.9-1.2 1.4-2.1.2-.4.4-.8.4-1.2s-.2-.8-.4-1.2c-.2-.4-.4-.8-.4-1.2s.2-.8.4-1.2c.2-.4.4-.8.4-1.2s-.2-.8-.4-1.2c-.2-.4-.4-.8-.4-1.2s.2-.8.4-1.2" />
      <path d="M2 22s.7-2.1 2-3.4c-1.6-1.4-1.6-3.6 0-5.1 1.6-1.5 4.5-2.5 8-2.5s6.4 1 8 2.5c1.6 1.5 1.6 3.6 0 5.1s-.7 2.1-2 3.4l-1.2 1.6c-.4.5-.9 1.2-1.4 2.1-.2.4-.4.8-.4-1.2s.2-.8.4-1.2c.2-.4.4-.8.4-1.2s-.2-.8-.4-1.2c-.2-.4-.4-.8-.4-1.2s.2-.8.4-1.2c.2-.4.4-.8.4-1.2s-.2-.8-.4-1.2c-.2-.4-.4-.8-.4-1.2s.2-.8.4-1.2" />
    </svg>
  ),
  instagram: (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  linkedin: (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};
