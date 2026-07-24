'use client';

import { useState, useEffect } from "react"
import Link from 'next/link';
import Image from 'next/image';
import LearnMoreDropdown from '@/components/learn-more-dropdown';
import { useRouter } from "next/navigation";
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const router = useRouter();
    
    const [menuIcon, setIcon] = useState( false );

    const handleSmallerScreensNavigation = () =>
    {
        setIcon( !menuIcon );
    }

    // 2. Lock page scrolling when the mobile menu is active
    useEffect(() => {
        if (menuIcon) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount or state change
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuIcon]);

    return (
        <header className="bg-[#1F3A5F] text-black w-full ease-in duration-300 fixed top-0 left-0 z-40">
            <nav className="max-w-[1440px] mx-auto h-[80px] flex justify-between items-center p-4">

                {/*Left Side of Navigation Bar: Company Logo */}
                <div className="h-[80px] w-[120px] flex items-center">
                    <Link href="/" className="relative w-full h-full block">
                        <Image
                            src="/logos/FullLogo.jpg"
                            alt="Company Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>
                </div>

                {/* Larger Screen Navigation */}
                <ul className="hidden md:flex items-center uppercase font-semibold text-lg text-white gap-4 lg:gap-6">
                    <li className=" hover:text-slate-300 hover:underline transition-colors flex items-center">
                        <Link href="/post">Post A New Listing</Link>
                    </li>
                    <li className=" hover:text-slate-300 hover:underline transition-colors flex items-center">
                        <Link href="/search">Search Listings</Link>
                    </li>
                    <li className="flex items-center">
                        <LearnMoreDropdown/>
                    </li>
                    <li className="flex items-center gap-3">
                        <Button
                            onClick={() => router.push('/signup')}
                            className="bg-[#C7A86D] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                            Sign Up
                        </Button>
                        <Button
                            onClick={() => router.push('/login')}
                            className="bg-[#C7A86D] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                            Login
                        </Button>
                    </li>
                </ul>

                {/* Smaller Screen Navigation */}
                <div onClick={handleSmallerScreensNavigation} className="flex md:hidden text-white cursor-pointer z-50 hover:opacity-80 transition-opacity">
                    {menuIcon ? (
                        <X className="w-10 h-10 text-white"/>
                    ) : (
                        (<Menu className="w-10 h-10 text-white"/>)
                    )}
                </div>

                {/* Smaller Screens - Navbar */}
                <div className={menuIcon ?
                    "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex items-center w-full h-screen bg-[#1F3A5F] text-white ease-in duration-300"
                    :
                    "md:hidden absolute top-[100px] right-0 left-[-100%] flex items-center w-full h-screen bg-[#1F3A5F] text-white text-center ease-in duration-300"
                }>
                    {/* Smaller Screens - Navbar Links */}
                    <div className="w-full text-left mx-8 pb-20">
                        <ul className="uppercase font-bold text-xl space-y-2">
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">Search Listings</Link>
                            </li>
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">How It Works</Link>
                            </li>
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">Trust and Safety</Link>
                            </li>
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">Our Blog | Between Rotations</Link>
                            </li>
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">About Us</Link>
                            </li>
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">FAQ</Link>
                            </li>
                            <li onClick={handleSmallerScreensNavigation} className="py-5 hover:text-slate-900 cursor-pointer transition-colors">
                                <Link href="/search">Contact Us</Link>
                            </li>
                            <li>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button
                                        onClick={() => {
                                        handleSmallerScreensNavigation();
                                        router.push('/signup');
                                        }}
                                        className="bg-[#C7A86D] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl"
                                    >
                                        Sign Up
                                    </Button>
                                    <Button
                                        onClick={() => {
                                        handleSmallerScreensNavigation();
                                        router.push('/login');
                                        }}
                                        className="bg-[#C7A86D] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </li>
                            <li>
                                <div className="grid grid-cols-1 gap-3">
                                    <Button
                                        onClick={() => {
                                        handleSmallerScreensNavigation();
                                        router.push('/post');
                                        }}
                                        className="bg-[#c76d6d] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl"
                                    >
                                        Post A New Listing
                                    </Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}