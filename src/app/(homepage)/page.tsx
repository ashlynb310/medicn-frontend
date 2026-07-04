// src/app/(homepage)/page.tsx: This page is the homepage for the website.
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button'; //Import shadcn/ui button
import { useRouter } from 'next/navigation';
import CityCarousel from '@/components/city-carousel';
import SearchInput from '@/components/search-input';

export default function Home() {
  const router = useRouter();

  {/* Search Input Logic */}
  const handleSearchSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('searchQuery');
    if (query) router.push(`/search?q=${encodeURIComponent(query.toString())}`);
  };

  return (
    <div className="w-full flex flex-col pb-16">

      {/* Section 1: Background Image With Text and Search Input Field */}
      <section className="relative h-160 w-full flex flex-col items-center pt-36 px-6 text-center">
        
        {/* Placeholder image for the background image*/}
        <Image
          src="/600x400_Placeholder_Image.png"
          alt="Placeholder Image"
          fill
          priority
          className="object-cover object-center pointer-events-none"
        />

        {/* Tint overlay to increase visibility of the text over the image. */}
        <div className="absolute inset-0 bg-slate-900/50 pointer-events-none" />

        {/* Foreground Content Frame */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Connecting Healthcare Professionals to the Homes They Need
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white max-w-xl drop-shadow">
            The MediCN (Medical Community Network) is a marketplace designed for medical professionals seeking flexible, comfortable housing while on rotations, assignments, or relocations.
          </p>

          {/* Search Input Field Component */}
          <SearchInput onSubmit={handleSearchSubmit} />

        </div>
      </section>

      {/* Section 2: Displaying various cities with image carousel  */}
      <section className="w-full bg-[#7FD3FF] h-200 flex flex-col items-center pt-35 px-6">
        <div className="text-center max-w-2xl flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
            View Listings, Categories, or Locations
          </h1>
          <p className="text-xl text-black font-medium">
            Select where you traveling next.
          </p>
        </div>

        {/* City Carousel Component */}
        <CityCarousel />
      </section>

      {/* Section 3: Displaying Listings & Communication Between Host and Renters*/}
      <section className="w-full bg-[#27AE60] min-h-200 flex flex-col items-center py-24 px-6 text-white">

        <div className="text-center max-w-2xl flex flex-col gap-3 mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Feature Listings & Locations
          </h1>
        </div>

        {/* Column 1 */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="flex flex-col gap-4 group">
            <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-white/10">
              {/* An image of a listing */}
              <Image
                src="/400x400_Placeholder_Image.png"
                alt="Placeholder Image for Featured Listing Example"
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
            </div>

            {/* Captions for column 1 image */}
            <div className="px-2">
              <p className="text-xl font-semibold tracking-wider uppercase text-white">
                LISTING EXAMPLE
              </p>
              <p className="text-lg mt-1 font-medium text-white">
                Listing Your Property: Listing Description
              </p>
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

            {/* Caption for column 2 */}
            <div className="px-2">
              <p className="text-xl font-semibold tracking-wider uppercase text-white">
                COMMUNICATION BETWEEN HOST AND RENTER EXAMPLE
              </p>
              <p className="text-lg mt-1 font-medium text-white">
              Connect with verified healthcare professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            onClick={() => router.push('/post')}
            className="bg-[#0a2c58] hover:bg-slate-100 text-white font-bold px-8 py-6 rounded-xl text-md shadow-xl transition-all hover:shadow-2xl">
            List Your Property
          </Button>

        </div>

      </section>

      {/* Section 4:  */}
      <section className="w-full bg-[#E6F7FF] h-auto flex flex-col py-12 px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <div className="text-center flex flex-col items-center gap-3 mb-24 max-w-2xl mx-auto">
            <h1 className="text-4xl text-black md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
              Why The MediCN Is Different
            </h1>
            <p className="text-lg text-slate-900">
              Finding the right place to stay shouldn't add stress to your journey in healthcare.
              The MediCN was created with medical students and professionals in mind, offering trusted
              housing solutions that make every rotation, residency, and assignment feel a little more like home.
            </p>
          </div>

          <div className="flex flex-col gap-12 max-w-2xl mr-auto w-full">
            <div className="flex flex-col gap-3 max-w-2xl mr-auto">
              <h2 className="text-2xl font-bold text-black tracking-tight">
                Built for Healthcare Professionals
              </h2>
              <p className="text-slate-900 leading-relaxed">
               The MediCN is tailored to medical workers and students who need flexible,
               short-term stays close to work, whether you're on rotation, assignment, or residency.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-2xl mr-auto">
              <h2 className="text-2xl font-bold text-black tracking-tight">
                A Trusted Community
              </h2>
              <p className="text-slate-900 leading-relaxed">
                The MediCN is more than a housing platform—it's a network of trusted hosts who are committed to offering safe and comfortable homes.
                Each listing is verified, and our hosts are selected based on their commitment to providing a supportive environment.
              </p>
            </div>

            <div className="flex flex-col gap-3 max-w-2xl mr-auto">
              <h2 className="text-2xl font-bold text-black tracking-tight">
                Seamless Booking Experience
              </h2>
              <p className="text-slate-900 leading-relaxed">
                With The MediCN, booking is simple and secure.
                Whether you need a place for a night or several months,
                our platform offers flexible options designed to fit your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}