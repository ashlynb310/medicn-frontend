import Image from 'next/image';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

export default function HealthcareHousingNeedsAMarketplacePage() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FFFFFF]">
            <div className="w-full flex flex-col max-w-3xl text-center py-6 gap-3">
                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Why Healthcare Housing Needs Its Own Marketplace
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
                        href="/healthcare-housing-needs-a-marketplace"
                        className="text-sky-500 hover:text-slate-900 transition-colors">
                        Why Healthcare Housing Needs Its Own Marketplace</Link>
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Healthcare workers dedicate their lives to caring for others — but when it comes to finding housing, many face unnecessary stress.
                    From medical students on short-term rotations in Houston to traveling nurses working near Houston Methodist Hospital,
                    the housing search often feels like an uphill battle.
                </p>

                <p className="text-black text-lg leading-relaxed">
                    That's where The MediCN (Medical Community Network) comes in: a housing marketplace built exclusively for healthcare professionals and students.
                </p>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    The Unique Challenges of Healthcare Housing
                </h1>

                <p className="text-black text-lg leading-relaxed">
                    Healthcare professionals don't follow a “9-to-5” lifestyle.
                    That makes traditional housing platforms like Airbnb or Craigslist a poor fit.
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Here are just a few challenges:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            Short-term stays near hospitals{' '}
                            </strong>
                            <span>→ Most leases aren't flexible enough for 4-12 week medical rotations.</span>
                        </li>
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            Night shifts & long hours{' '}
                            </strong>
                            <span>→ Housing needs to be safe, quiet, and supportive of nontraditional schedules.</span>
                        </li>
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            Verification & trust{' '}
                            </strong>
                            <span>→ Healthcare workers want to know their hosts — and hosts want verified renters.</span>
                        </li>
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            Location matters{' '}
                            </strong>
                            <span> → Proximity to major hospitals and training sites like Texas Medical Center or Houston Methodist Hospital is key.</span>
                        </li>
                    </ul>
                </div>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Why a Dedicated Marketplace Works
                </h1>

                <p className="text-lg text-black leading-relaxed">
                    By creating a community designed specifically for medical professionals, The MediCN solves these issues:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            ✔ Verified professionals{' '}
                            </strong>
                            <span>→ Every renter is a healthcare worker or student with verified credentials.</span>
                        </li>
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            ✔ Trusted hosts{' '}
                            </strong>
                            <span>→ Listings are approved to ensure safe, comfortable spaces.</span>
                        </li>
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            ✔ Flexibility first{' '}
                            </strong>
                            <span>→ Whether it's 2 weeks, 2 months, or longer, you'll find housing that works around rotations and assignments.</span>
                        </li>
                        <li>
                            <strong className="text-lg font-bold text-black tracking-tight">
                            ✔ Community-driven{' '}
                            </strong>
                            <span>→ Just like Nextdoor connects neighbors, The MediCN connects healthcare workers to trusted housing and local resources.</span>
                        </li>
                    </ul>
                </div>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Real-Life Examples
                </h1>

                <p className="text-lg text-black leading-relaxed">
                    Imagine you're a med student starting a{' '}
                    <strong className="text-lg font-bold text-black tracking-tight">6-week rotation in Houston.{' '}</strong>
                    <span>Instead of scrambling on Craigslist, you log into{' '}</span>
                    <strong className="text-lg font-bold text-black tracking-tight">The MediCN:</strong> 
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>Search: “Housing near Houston Methodist Hospital”</li>
                        <li>Filter: Furnished, month-to-month, Wi-Fi included</li>
                        <li>Find: A trusted host who lists nearby study spots, grocery stores, and coffee shops that cater to students working long hours</li>
                    </ul>
                </div>

                <p className="text-lg text-black leading-relaxed">
                    You're not just booking a place — you're joining a community that understands your lifestyle.
                </p>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Checklist: What Makes Housing “Healthcare-Friendly”?
                </h1>

                <p className="text-lg text-black leading-relaxed">
                    If you're a{' '}
                    <strong className="text-lg text-black font-bold tracking-tight">host{' '}</strong>
                    <span>opening your home, here's what healthcare professionals look for:</span>
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>✅ Proximity to hospitals or medical schools</li>
                        <li>✅ Furnished & move-in ready spaces</li>
                        <li>✅ Flexible lease terms (weeks to months)</li>
                        <li>✅ Quiet, safe environment for night-shift rest</li>
                        <li>✅ High-speed Wi-Fi for charting and studying</li>
                    </ul>
                </div>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    The Bigger Picture
                </h1>

                <p className="text-lg text-black leading-relaxed">
                    Housing stress contributes to burnout — and burnout is already a crisis in medicine. By providing{' '}
                    <strong className="text-lg text-black font-bold tracking-tight">lexible, safe, and community-oriented housing{', '}</strong>
                    <span>The MediCN reduces stress so healthcare workers can focus on what matters most:{' '}</span>
                    <strong className="text-lg text-black font-bold tracking-tight">caring for patients.</strong>
                </p>

                <Separator/>

                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Ready to Join the Community?
                </h1>

                <p className="text-lg text-black leading-relaxed">
                    Finding housing shouldn't be harder than saving lives.
                </p>

                <span>
                    <strong className="text-lg text-black font-bold tracking-tight">Find your next home on The MediCN →{' '}</strong>
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

                <p className="text-lg text-black leading-relaxed">
                    You might also like:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>
                        <Link
                            href="/blog"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors"
                        >5 Tips for Finding Stress-Free Housing During Rotations</Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors"
                        >Your First Week on a New Assignment - Housing & Local Life Hacks
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}