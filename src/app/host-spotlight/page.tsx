import Image from 'next/image';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

export default function TipsForStressFreeHousingPage() {
    return (
        <div className="w-full flex flex-col items-center bg-[#FFFFFF]">
            <div className="w-full flex flex-col max-w-3xl text-center py-6 gap-3">
                <h1 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Host Spotlight - Opening Your Home to Healthcare Workers
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
                        Host Spotlight - Opening Your Home to Healthcare Workers</Link>
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Behind every The MediCN stay is a{' '}
                    <strong className="text-lg font-bold text-black tracking-tight">host who makes it possible{'.'}</strong>
                    <span>Hosting healthcare professionals isn't just about filling space — it's about supporting people who dedicate their lives to caring for others.</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Why Healthcare Guests Are Unique
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Healthcare professionals are:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>✅ Responsible and respectful</li>
                    <li>✅ Reliable, with stable assignments or rotations</li>
                    <li>✅ Often in need of{' '}
                        <strong className="text-lg text-black font-bold tracking-tight">shorter, flexible</strong>
                        <span>stays that traditional renters don't seek</span>
                    </li>
                </ul>

                <p className="text-black text-lg leading-relaxed">
                    Hosting a traveling nurse in Dallas or a med student rotating in NYC looks different than renting to a long-term tenant.
                    These professionals need
                    <strong className="text-lg text-black font-bold tracking-tight">move-in ready, quiet, and safe housing</strong>
                    <span>for demanding schedules.</span>
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    What Great Hosts Provide
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Successful hosts often offer:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Furnished apartments or rooms with Wi-Fi</li>
                    <li>Proximity to hospitals (UT Southwestern in Dallas, Mount Sinai in NYC, Jackson Memorial in Miami)</li>
                    <li>Flexible leases — weeks to a few months</li>
                    <li>Local tips: best study cafés, gyms, late-night food</li>
                </ul>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Real Host Story
                </h2>

                <p className="text-black text-lg leading-relaxed italic">
                    "When I first listed my apartment near Memorial Hermann Hospital in Houston, TX, I didn't realize how much of a difference it would make for med students.
                    They're respectful, grateful, and exhausted from rotations — it feels good knowing I'm supporting future doctors during a stressful chapter." - Toni, Host
                </p>

                <h2 className="text-4xl font-extrabold text-black tracking-tight leading-tight drop-shadow-md">
                    Thinking of Hosting?
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    Opening your home isn't just income — it's{' '}
                    <strong className="text-lg text-black font-bold tracking-tight">impact.{' '}</strong>
                    <span>You're part of a network that helps healthcare workers feel valued, rested, and connected.</span>
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

                <p className="text-black text-lg leading-relaxed">You might also like:</p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>
                        <Link
                            href="/tips-for-stress-free-housing"
                            className="text-lg text-sky-500 hover:text-slate-900 transition-colors">
                            5 Tips for Finding Stress-Free Housing During Rotations
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