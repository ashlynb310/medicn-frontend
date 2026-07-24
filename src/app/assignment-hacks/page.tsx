import Image from 'next/image';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

export default function AssignmentHacksPage() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FFFFFF]">
            <div className="w-full flex flex-col max-w-3xl text-center py-6 gap-3">
                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Your First Week on a New Assignment - Housing & Local Life Hacks
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
                        Your First Week on a New Assignment - Housing & Local Life Hacks</Link>
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Starting a new assignment is a whirlwind: you're meeting a new team, adjusting to new workflows, and navigating a new city.
                    To avoid being overwhelmed, here are life hacks to make your first week smoother.
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    1. Unpack Your “First-Day Bag”
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Don't live out of your suitcase. Pack a separate bag with essentials: scrubs, stethoscope, laptop, ID, and a few comfort items (like coffee or snacks). Unpack these immediately.
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    2. Test Your Commute Before Day One
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Do a “
                    <strong className="text-lg font-bold text-black tracking-tight">dry run</strong>
                    <span>” to your hospital before your first shift — especially in busy areas like Brooklyn or Miami.
                    Learn the route, parking, and traffic patterns so your first day isn't chaos.</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    3. Find Your “Third Place”
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Your apartment and hospital aren't enough. Identify a
                    <strong className="text-lg font-bold text-black tracking-tight">study spot or coffee shop</strong>
                    <span>near your stay (like independent cafés near UT Austin or libraries in the Bronx).</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    4. Stock Smart
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Head to a grocery store or meal prep service your first day.
                    Easy meals = fewer late-night fast food runs during exhausting rotations.
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    5. Protect Your Wellness
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Head to a grocery store or meal prep service your first day.
                    Easy meals = fewer late-night fast food runs during exhausting rotations.
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    6. Get to Know Your Host & Neighborhood
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Ask your host about local resources — the best takeout, safest routes home, or dog parks if you've brought a pet.
                    The MediCN hosts are encouraged to share these insights.
                </p>

                <p className="text-black text-lg leading-relaxed">
                    <strong className="text-lg font-bold text-black tracking-tight">Pro Tip:{' '}</strong>
                    <span> Look for The MediCN listings with local resources already built in (hospitals, cafés, gyms, parks) to skip the stress of figuring it out yourself.</span>
                </p>

                <span>
                    <strong className="text-lg text-black font-bold tracking-tight">Search for housing that makes your first week stress-free →{' '}</strong>
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
                            href="/tips-for-stress-fire-housing"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors">
                            5 Tips for Finding Stress-Free Housing During Rotations
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}