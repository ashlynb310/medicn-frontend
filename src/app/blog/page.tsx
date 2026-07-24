'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
    const router = useRouter();

    return (
        <div className="w-full flex flex-col">
            <section className="w-full flex flex-col items-center text-center h-160 relative">
                <Image
                    src="/600x400_Placeholder_Image.png"
                    alt="Placeholder Image"
                    fill
                    priority
                    className="object-cover object-center pointer-events-none"
                />

                {/* Tint overlay to increase visibility of the text over the image */}
                <div className="absolute inset-0 bg-slate-900/50 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center max-w-3xl text-white py-48 gap-6">
                    <h2 className="text-4xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                        Between Rotations
                    </h2>

                    <p className="text-lg text-white max-w-xl">
                        Welcome to Between Rotations — the space where healthcare professionals and students can find practical housing tips, wellness guidance, and stories from The MediCN community.
                        Whether you're a medical student starting a rotation in Manhattan or a traveling nurse near the Texas Medical Center this blog is here to support your journey.
                    </p>
                </div>
            </section>

            <section className="w-full flex flex-col items-center h-40 bg-[#C7A86D] py-10">
                <h1 className="text-6xl text-white font-extrabold tracking-tight leading-tight drop-shadow-md">
                    Housing. Community. Connection.
                </h1>
            </section>

            <section className="w-full flex flex-col h-140 bg-[#E8E1D5] items-center">
                <div className="flex flex-col text-center max-w-2xl py-12">
                    <h1 className="text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                        ✨ Featured Post ✨
                    </h1>
                </div>

                {/* Column 1 */}
                <div className="grid grid-cols-2 gap-8 w-full max-w-5xl">
                    <div className="flex flex-col gap-4 group">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            Why Healthcare Housing Needs Its Own Marketplace
                        </h2>

                        <p className="text-lg text-white leading-relaxed">
                            Healthcare workers face unique housing challenges that traditional platforms like Airbnb can't solve.
                            Discover why The MediCN is building a housing network made just for you.
                        </p>

                        <div className="">
                            <Button
                                onClick={() => router.push('/healthcare-housing-needs-a-marketplace')}
                                className="bg-[#0a2c58] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                                Read More
                            </Button>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 group">
                        <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-white/10">
                            {/* Image showing conversation between host and renter */}
                            <Image
                            src="/400x400_Placeholder_Image.png"
                            alt="Placeholder Image for Conversation Between Host and Renter"
                            fill
                            sizes="(max-w-768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col h-240 bg-[#C8AD7E] items-center">
                <div className="flex flex-col text-center max-w-2xl py-12">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                        Check Out Our Latest Posts
                    </h1>
                </div>

                <div className="grid grid-cols-4 gap-16 w-full max-w-5xl">
                    <div className="flex flex-col gap-4 group">
                        {/* Column 1 */}
                        <div className="relative h-60 w-60 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                            {/* Image showing conversation between host and renter */}
                            <Image
                            src="/400x400_Placeholder_Image.png"
                            alt="Placeholder Image for Conversation Between Host and Renter"
                            fill
                            sizes="(max-w-768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                Why Healthcare Housing Needs Its Own Marketplace
                            </h2>

                            <p className="text-lg text-white leading-relaxed">
                                Published on September 16th, 2025
                            </p>

                            <p className="text-lg text-white leading-relaxed">
                                Healthcare workers face unique housing challenges that traditional platforms like Airbnb can't solve.
                                Discover why The MediCN is building a housing network made just for you.
                            </p>

                            <div className="">
                                <Button
                                    onClick={() => router.push('/healthcare-housing-needs-a-marketplace')}
                                    className="bg-[#0a2c58] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 group">
                        {/* Column 2 */}
                        <div className="relative h-60 w-60 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                            {/* Image showing conversation between host and renter */}
                            <Image
                            src="/400x400_Placeholder_Image.png"
                            alt="Placeholder Image for Conversation Between Host and Renter"
                            fill
                            sizes="(max-w-768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                5 Tips for Finding Stress-Free Housing During Rotations
                            </h2>

                            <p className="text-lg text-white leading-relaxed">
                                Published on September 22nd, 2025
                            </p>

                            <p className="text-lg text-white leading-relaxed">
                                Housing should be the last thing you worry about when starting a new rotation.
                                Read these 5 tips for finding stress-free housing during rotations.
                            </p>

                            <div className="">
                                <Button
                                    onClick={() => router.push('/tips-for-stress-free-housing')}
                                    className="bg-[#0a2c58] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 group">
                        {/* Column 3 */}
                        <div className="relative h-60 w-60 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                            {/* Image showing conversation between host and renter */}
                            <Image
                            src="/400x400_Placeholder_Image.png"
                            alt="Placeholder Image for Conversation Between Host and Renter"
                            fill
                            sizes="(max-w-768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                Host Spotlight - Opening Your Home to Healthcare Workers
                            </h2>

                            <p className="text-lg text-white leading-relaxed">
                                Published on October 1st, 2025
                            </p>

                            <p className="text-lg text-white leading-relaxed">
                                Hosting healthcare professionals is about supporting people who dedicate their lives to caring for others.
                                Learn more about how you can make an impact as a host!
                            </p>

                            <div className="">
                                <Button
                                    onClick={() => router.push('/host-spotlight')}
                                    className="bg-[#0a2c58] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                                    Read More
                                </Button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-4 group">
                        {/* Column 4 */}
                        <div className="relative h-60 w-60 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                            {/* Image showing conversation between host and renter */}
                            <Image
                            src="/400x400_Placeholder_Image.png"
                            alt="Placeholder Image for Conversation Between Host and Renter"
                            fill
                            sizes="(max-w-768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-103"
                            />
                        </div>

                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                Your First Week on a New Assignment - Housing & Local Life Hacks
                            </h2>

                            <p className="text-lg text-white leading-relaxed">
                                Published on October 10th, 2025
                            </p>

                            <p className="text-lg text-white leading-relaxed">
                                Starting a new assignment can be overwhelming.
                                Apply these life hacks to make your transition smoother.
                            </p>

                            <div className="">
                                <Button
                                    onClick={() => router.push('/assignment-hacks')}
                                    className="bg-[#0a2c58] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col items-center bg-[#FFFFFF] h-72">
                <div className="flex flex-col text-center max-w-lg py-12 gap-6">
                    <h2 className="text-4xl font-extrabold tracking-tight text-black leading-tight drop-shadow-md">
                        Join The Community
                    </h2>

                    <p className="text-xl text-black leading-relaxed">
                        Stay connected with stories, tips, and housing opportunities designed for healthcare professionals.
                    </p>

                    <div className="">
                        <Button
                            onClick={() => router.push('/search')}
                            className="bg-[#0a2c58] hover:bg-slate-900 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
                            Search Listings
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}