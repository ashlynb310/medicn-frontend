'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LearnMoreDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 uppercase text-lg text-white hover:text-slate-300 hover:underline transition-colors focus:outline-none font-semibold py-2">
        Learn More 
        <ChevronDown className="h-6 w-6 opacity-80" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-50 bg-white rounded-xl p-1.5 shadow-lg border border-slate-300 z-50">
        
        <DropdownMenuItem 
          render={<Link href="/how-it-works" />}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-sm text-[#2E2E2E] focus:bg-slate-50 focus:text-slate-900 transition-colors block"
        >
          How It Works
        </DropdownMenuItem>

        <DropdownMenuItem 
          render={<Link href="/trust-and-safety" />}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-sm text-[#2E2E2E] focus:bg-slate-50 focus:text-slate-900 transition-colors block"
        >
          Trust and Safety
        </DropdownMenuItem>

        <DropdownMenuItem 
          render={<Link href="/blog" />}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-sm text-[#2E2E2E] focus:bg-slate-50 focus:text-slate-900 transition-colors block"
        >
          Our Blog | Between Rotations
        </DropdownMenuItem>

        <DropdownMenuItem 
          render={<Link href="/about" />}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-sm text-[#2E2E2E] focus:bg-slate-50 focus:text-slate-900 transition-colors block"
        >
          About Us
        </DropdownMenuItem>

        <DropdownMenuItem 
          render={<Link href="/faq" />}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-sm text-[#2E2E2E] focus:bg-slate-50 focus:text-slate-900 transition-colors block"
        >
          FAQ
        </DropdownMenuItem>

        <DropdownMenuItem 
          render={<Link href="/contact-us" />}
          className="w-full cursor-pointer rounded-lg px-3 py-2 text-sm text-[#2E2E2E] focus:bg-slate-50 focus:text-slate-900 transition-colors block"
        >
          Contact Us
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}