import { type ClassValue, clsx } from 'clsx';
import { Phone, ShoppingBag, Truck } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
export const perks = [
  {
    name: 'Instant Delivery',
    Icon: Truck,
    description:
      'Get your products delivered to your place in minitues and use them right away.',
  },
  {
    name: 'Guaranteed Quality',
    Icon: ShoppingBag,
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: '24x7 Customer Support',
    Icon: Phone,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];
