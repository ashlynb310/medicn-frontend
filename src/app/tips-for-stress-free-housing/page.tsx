import Image from 'next/image';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

export default function TipsForStressFreeHousingPage() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FFFFFF]">
            <div className="w-full flex flex-col max-w-3xl text-center py-6 gap-3">
                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    5 Tips for Finding Stress-Free Housing During Rotations
                </h1>
            </div>

            <div className="relative w-180 h-120 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                {/* Image showing conversation between host and renter */}
                <Image
                    src="/600x400_Placeholder_Image.png"
                    alt="Placeholder Image for Conversation Between Host and Renter"
                    fill
                    sizes="(max-w-768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-103"
                />
            </div>

            <div className="w-full flex flex-col max-w-3xl items-start text-left py-6 gap-6">
                <p className="text-black text-lg">
                    <Link
                        href="/blog"
                        className="text-sky-500 hover:text-slate-900 transition-colors">
                    Between Rotations</Link>
                    <span>{' '}→{' '}</span>
                    <Link
                        href="/tips-for-stress-free-housing"
                        className="text-sky-500 hover:text-slate-900 transition-colors">
                        5 Tips for Finding Stress-Free Housing During Rotations</Link>
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Rotations are some of the most exciting — and stressful — parts of medical training.
                    You're adjusting to new hospitals, new teams, and often a new city.
                    The last thing you should worry about? Housing.
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Here are 5 detailed strategies for finding stress-free housing during rotations:
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    1. Start Early & Search Smart
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Housing near major hospitals fills quickly — especially in cities like{' '}
                    <strong className="text-lg font-bold text-black tracking-tight">New York City, Miami, or Austin{' '}</strong>
                    <span>with large medical schools. Begin your search at least 6 weeks ahead and use healthcare-specific platforms like{' '}</span>
                    <strong className="text-lg font-bold text-black tracking-tight">The MediCN</strong>
                    <span>, where listings are designed for short-term, verified stays.</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    2. Prioritize Location Over Price
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Long commutes = lost sleep. For rotations,{' '}
                    <strong className="text-lg font-bold text-black tracking-tight">staying within 15-20 minutes of your hospital{' '}</strong>
                    <span>(like Mount Sinai in NYC or Jackson Memorial in Miami) makes a huge difference in energy and productivity.</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    3. Go Furnished & Flexible
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Rotations are temporary. Choose{' '}
                    <strong className="text-lg font-bold text-black tracking-tight">furnished housing with flexible leases{' '}</strong>
                    <span>— 4, 8, or 12 weeks — so you don't waste time buying furniture or getting locked into a long contract.</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    4. Vet Your Hosts
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Not every landlord understands 12-hour shifts or night float schedules.
                    Look for hosts who specifically mention healthcare workers in their listings.
                    On The MediCN, every healthcare renter is verified — and hosts are approved based on their commitment to safe, flexible stays.
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    5. Think Beyond the Apartment
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Housing isn't just four walls — it's your{' '}
                    <strong className="text-lg font-bold text-black tracking-tight">local ecosystem{'.'}</strong>
                    <span>When browsing listings, check for:</span>
                </p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Coffee shops or study spots nearby</li>
                    <li>Affordable food open late</li>
                    <li>Gyms or parks</li>
                    <li>Local grocery stores</li>
                </ul>

                <p className="text-black text-lg leading-relaxed">
                    <strong className="text-lg font-bold text-black tracking-tight">Pro Tip:{' '}</strong>
                    <span>On The MediCN, many hosts highlight these local resources directly in their listings to make your first week easier.</span>
                </p>

                <span>
                    <strong className="text-lg text-black font-bold tracking-tight">Find your next rotation stay on The MediCN →{' '}</strong>
                        <Link
                            href="/search"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors"
                        >Search Listings</Link>
                </span>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Continue Reading
                </h1>

                <span>
                    <strong className="text-lg text-black font-bold tracking-tight">Back to{' '}</strong>
                        <Link
                            href="/blog"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors"
                        >Between Rotations</Link>
                </span>

                <p className="text-black text-lg leading-relaxed">You might also like:</p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>
                        <Link
                            href="/healthcare-housing-needs-a-marketplace"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors">
                            Why Healthcare Housing Needs Its Own Marketplace
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/assignment-hacks"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors">
                            Your First Week on a New Assignment - Housing & Local Life Hacks
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}