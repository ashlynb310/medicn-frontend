export default function HowItWorksPage() {
    return (
        <div className="w-full flex flex-col">
            <section className="w-full bg-[#2F80ED] py-12">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-extrabold text-white md:text-6xl tracking-tight leading-tight drop-shadow-md">
                        How It Works
                    </h1>

                    <p className="text-white mt-6 text-lg md:text-xl max-w-2xl">
                        Our mission is simple: to connect healthcare professionals with homes that fit their lives — safely, fairly, and with a sense of community.
                    </p>
                </div>

                <div className="flex flex-col gap-9 max-w-5xl mx-auto w-full items-start text-left py-12">
                    <div className="flex flex-col gap-1.5 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            1. Create Your Account
                        </h2>

                        <p className="text-lg leading-relaxed text-white">
                            Sign up in minutes and join our trusted medical community network.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            2. Search or List
                        </h2>

                        <ul className="list-disc pl-5 space-y-2 text-lg text-white">
                            <li>
                                Healthcare professionals (renters): Browse verified listings near hospitals, clinics, and training sites.
                            </li>
                            <li>
                                Hosts: List your property for free and connect with responsible, vetted renters.
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-1.5 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            3. Book Securely
                        </h2>

                        <p className="text-lg text-white leading-relaxed">
                            Send booking requests, confirm stays, and handle payments all within our secure platform.
                        </p>
                    </div>

                    <div className="flex flex-col gap-1.5 max-w-3xl">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            4. Verified & Move In With Confidence
                        </h2>

                        <p className="text-lg text-white leading-relaxed">
                            All healthcare students and professionals are verified, and every listing is reviewed for safety, comfort, and convenience.
                            That means you can trust the people you're staying with — and the people staying with you.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#7FD3FF] py-12">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-4xl font-extrabold text-black md:text-6xl tracking-tight leading-tight drop-shadow-md">
                        About Our Fees
                    </h1>

                    {/* 3 Column Structure */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-36">
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl font-bold text-black tracking-tight">Hosts</h2>
                            <p className="text-lg leading-relaxed text-black">
                                You keep 89% of your booking. The MediCN takes just 11% to cover platform support, verification, and secure payments.
                            </p>
                        </div>
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl font-bold text-black tracking-tight">Renters</h2>
                            <p className="text-lg leading-relaxed text-black">
                                You pay a simple 6% service fee for secure booking, payment protection, and community support.
                            </p>
                        </div>
                        <div className="flex flex-col w-full">
                            <h2 className="text-2xl font-bold text-black tracking-tight">It's As Easy As That</h2>
                            <p className="text-lg leading-relaxed text-black">
                                That's it — no hidden fees. No surprises.
                            </p>
                        </div>
                    </div>
                </div>  
            </section>
        </div>
    )
}