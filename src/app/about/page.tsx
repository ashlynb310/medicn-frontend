import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="w-full bg-[#DAA06D] py-12">
            <div className="text-center flex flex-col items-center gap-3 mb-24 max-w-2xl mx-auto">
                <h1 className="text-4xl text-white md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                Our Story
                </h1>

                <Image
                    src="/600x400_Placeholder_Image.png"
                    alt="Placeholder Image"
                    width={800}
                    height={800}
                />
                
            </div>

            <div className="flex flex-col gap-12 max-w-2xl mx-auto w-full items-start text-left">
                <div className="flex flex-col gap-3 max-w-2xl w-full">
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        Our Story
                    </h2>

                    <p className="text-lg text-white leading-relaxed">
                        The MediCN began with one urgent mission: to ease the stress of finding housing during rotations and assignments.
                        It has since evolved into a thriving medical community network—where professionals and hosts support one another in finding comfort and connection.
                    </p>

                    <p className="text-lg text-white leading-relaxed">
                        Every day, more healthcare workers join The MediCN for a place where they feel valued—not just accommodated.
                        Our story is one of collaboration: providers opening homes, and medical professionals finding stability wherever their careers take them.
                    </p>

                    <p className="text-lg text-white leading-relaxed">
                       This is just the beginning. As our network grows, so does its impact:
                       creating a trusted ecosystem where healthcare professionals can thrive—no matter where they go.
                    </p>

                </div>

                <div className="flex flex-col gap-3 max-w-2xl mr-auto">
                    <h2 className="text-3xl text-white font-bold tracking-tight">
                        Our Mission
                    </h2>

                    <p className="text-lg text-white leading-relaxed">
                        To empower healthcare workers by connecting them to flexible, verified housing
                        and a network of peers—so they can focus on what matters most.
                    </p>
                </div>

                <div className="flex flex-col gap-3 max-w-2xl mr-auto">
                    <h2 className="text-3xl text-white font-bold tracking-tight">
                        How We Make A Difference
                    </h2>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-white">
                        <li>
                            <strong className="text-lg text-white">Reduce Housing Stress:</strong> Enjoy short- or long-term options near hospitals.
                        </li>
                        <li>
                            <strong className="text-lg text-white">Verified Community:</strong> Safe, furnished listings with professional-minded hosts.
                        </li>
                        <li>
                            <strong className="text-lg text-white">Built for Healthcare:</strong> Tailored to the realities of medical career demands.
                        </li>
                        <li>
                            <strong className="text-lg text-white">Human Connection:</strong> A trusted network that values and supports healthcare workers.
                        </li>
                    </ul>

                </div>

                <div className="flex flex-col gap-3 max-w-2xl mr-auto">
                    <h2 className="text-3xl text-white font-bold tracking-tight">
                        Who We Serve
                    </h2>

                    <p className="text-lg text-white">
                        We serve healthcare professionals and students—doctors, nurses, therapists, residents,
                        and more—who need flexible, trustworthy,and convenient housing during rotations, relocations, or temporary assignments.
                        The MediCN is built for your journey.
                    </p>
                </div>

                <div className="flex flex-col gap-3 max-w-2xl mr-auto">
                    <h2 className="text-3xl text-white font-bold tracking-tight">
                        Who Are We
                    </h2>

                    <p className="text-lg text-white">
                        We are a medical community network created by healthcare workers, for healthcare workers. Together, we believe everyone deserves housing that's safe, flexible, and rooted in community.
                    </p>

                    <p className="text-lg text-white">
                        Your Community. Your Home. Your Network.
                    </p>
                </div>
            </div>
        </div>
    )
}