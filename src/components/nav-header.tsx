// src/app/nav-header.tsx

import Link from 'next/link';
import Image from 'next/image';
import LearnMoreDropdown from '@/components/learn-more-dropdown';

export default function NavHeader() {
    return (
        /* sticky top-0: Locks the header to the top of the viewport when scrolling.
      z-50: Ensures the header stays stacked on top of all body content.
      w-full border-b border-slate-200 bg-white: Full width, subtle divider line, and solid background so content doesn't bleed through underneath it.
      */
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/*Left Side of Header: Logo*/}
                <div className="flex items-center">
                    <Link href="/" aria-label="Homepage" className="flex items-center gap-3 group">
                        <Image
                            src="/logos/FullLogo_Transparent.png"
                            alt="Company Logo"
                            width={150}
                            height={100}
                            className="h-9 w-auto"
                            priority
                        />
                    </Link>
                </div>

                {/*Right Side of Header: Nav Links*/}
                <div className="flex items-center gap-5">
                    <Link href="/post" className="text-slate-700 hover:text-slate-900 transition-colors">
                    Post A New Listing
                    </Link>

                    <Link href="/search" className="text-slate-700 hover:text-black transition-colors">
                    Search Listing
                    </Link>

                    {/*Learn More Dropdown Component */}
                    <LearnMoreDropdown/>
                    
                    <Link href="/signup" className="text-slate-700 hover:text-black transition-colors">
                    Sign Up
                    </Link>
                    
                    <Link href="/login" className="text-slate-700 hover:text-black transition-colors">
                    Log In
                    </Link>
                </div>
                
            </div>
        </header>
    )
}