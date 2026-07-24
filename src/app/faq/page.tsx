import Link from 'next/link';

export default function FAQPage() {
    return (
        <div className="w-full bg-[#E6F7FF] py-12">
            <div className="items-center flex flex-col py-6">
                <h1 className="text-4xl font-extrabold text-black md:text-6xl tracking-tight leading-tight drop-shadow-md">
                    Frequently Asked Questions (FAQ)
                </h1>

                <p className="text-slate-800 mt-6 text-lg md:text-xl max-w-2xl">
                    Welcome to The MediCN FAQ! Here you'll find answers to the most common questions from both healthcare professionals looking for housing and hosts listing their properties.
                    Our goal is to make your experience simple, secure, and stress-free.
                    If you don't see your question answered here, please reach out through our **
                    <Link href="/contact-us" className="underline text-black hover:text-sky-500 transition-colors">Contact Us</Link>
                    ** page—we're here to help. 
                </p>
            </div>

            <div className="flex flex-col gap-9 max-w-5xl mx-auto w-full items-start text-left">
                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <h2 className="text-3xl font-bold text-black tracking-tight">
                        For Healthcare Professionals (Renters)
                    </h2>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: Who can use The MediCN?</strong>
                    <p className="text-lg leading-relaxed">
                        The MediCN is designed exclusively for healthcare professionals and students — including doctors, nurses, therapists, residents, and medical trainees. All users are verified before booking.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">Q: How does verification work?</strong>
                    <strong className="text-xl font-bold text-black tracking-tight">
                        We require proof of professional or student status (such as a work badge, enrollment letter, or license). This ensures that every renter is a trusted member of the healthcare community.
                    </strong>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                     <strong className="text-xl font-bold text-black tracking-tight">
                        Q: How long does verification take?</strong>
                    <p className="text-lg leading-relaxed">
                        Verification typically takes 1-2 business days. Once completed, you'll be notified via email and can start using MediCN immediately.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                     <strong className="text-xl font-bold text-black tracking-tight">
                        Q: What types of housing are available?</strong>
                    <p className="text-lg leading-relaxed">
                        You'll find fully furnished apartments, shared housing, private rooms, and entire homes — all near hospitals, clinics, and training sites.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                    Q: How much does it cost to book?</strong>
                    <p className="text-lg leading-relaxed">
                        You pay the listing price plus a 6% service fee, which covers secure payments, booking protection, and community support.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                    Q: Can I book short-term stays?</strong>
                    <p className="text-lg leading-relaxed">
                        Yes! The MediCN is designed for flexibility — whether you need a place for a week, a month, or longer.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                    Q: Can I search for pet-friendly or accessible listings?</strong>
                    <p className="text-lg leading-relaxed">
                        Yes. We offer filters (like pet-friendly and accessible listings) to help match your unique needs during your stay.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                    Q: Can I leave a review after my stay or hosting?</strong>
                    <p className="text-lg leading-relaxed">
                        Absolutely. Reviews help us maintain community trust. Guests can review hosts after checkout, and hosts can review guests within 7 days.
                    </p>
                </div>


                    <h2 className="text-3xl font-bold text-black tracking-tight">
                        For Hosts
                    </h2>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: Who can list a property on The MediCN?</strong>
                    <p className="text-lg leading-relaxed">
                        Anyone with a safe, comfortable, and furnished property near a medical center, clinic, or hospital can apply to list. All hosts must agree to our community standards.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: Is there a fee to list?</strong>
                    <p className="text-lg leading-relaxed">
                        No — it's free to create and publish a listing. We only earn when you do.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: How much do I pay in fees?</strong>
                    <p className="text-lg leading-relaxed">
                        Hosts keep 89% of their booking earnings. The MediCN retains a 11% commission to cover payment processing, support, and platform maintenance.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: How do I get paid?</strong>
                    <p className="text-lg leading-relaxed">
                        Payouts are handled securely through our platform and deposited directly into your bank account after a successful booking.
                    </p>
                </div>


                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: When do I receive my payout as a host?</strong>
                    <p className="text-lg leading-relaxed">
                        After the guest checks in, your payout is released within 24 hours. Funds are deposited to your linked account shortly after, depending on your bank.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: Who are the renters? All renters are verified healthcare professionals or students.</strong>
                    <p className="text-lg leading-relaxed">
                        You'll know you're welcoming responsible, vetted guests into your home.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: How can I highlight local resources for healthcare professionals in my listing?</strong>
                    <p className="text-lg leading-relaxed">
                        When creating your listing, you can add a short “Neighborhood Resources” section to help renters get oriented and feel at home right away. We recommend listing 1–3 nearby spots per category (if applicable). This makes your listing stand out and provides real value to healthcare professionals looking for convenience during their stay.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <p className="text-lg leading-relaxed">
                        Example format you can copy into your listing:
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            🏥 Hospitals nearby: Baylor St. Luke's, MD Anderson
                        </li>
                        <li>
                            ☕ Coffee: Joe's Coffeehouse (quiet study spot)
                        </li>
                        <li>
                            🍲 Food: Pho 24 (cheap eats, open late)
                        </li>
                        <li>
                            🏋️ Gym: 24 Hour Fitness
                        </li>
                        <li>
                            🛒 Grocery: H-E-B Central Market
                        </li>
                        <li>
                            📚 Study Spots: TMC Library, Common Grounds Café
                        </li>
                        <li>
                            🌳 Parks: Hermann Park (walking trails)
                        </li>
                        <li>
                            🐶 Dog Parks: Johnny Steele Dog Park
                        </li>
                    </ul>
                    
                    <p className="text-lg leading-relaxed">
                        This format helps potential guests quickly understand what's around your place, making them more likely to book with confidence.
                    </p>
                </div>

                    <h2 className="text-3xl font-bold text-black tracking-tight">
                        Trust & Safety
                    </h2>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: How do you ensure safety for both hosts and renters?</strong>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            All healthcare professionals are verified.
                        </li>
                        <li>
                            All listings are reviewed for accuracy, comfort, and safety.
                        </li>
                        <li>
                            Payments are handled securely through The MediCN (no cash or off-platform transfers).
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: What minimum standards do listings need to meet?</strong>
                    <p className="text-lg leading-relaxed">
                        We require all listings to include essential amenities (like a bed and lockable door), clear photos, accurate descriptions, and safety features such as smoke detectors.
                    </p>
                </div>


                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: Does MediCN offer protection for damages? </strong>
                    <p className="text-lg leading-relaxed">
                        Hosts can choose to require guests to pay a refundable security deposit. Any claims are handled through our support team on a case-by-case basis.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: What is your cancellation policy?</strong>
                    <p className="text-lg leading-relaxed">
                        Our cancellation policies are modeled after Airbnb's (flexible, moderate, and strict) — hosts choose the policy that works best for them, and guests agree before booking.
                    </p>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        <span>Q: How quickly can I get support if there's an issue? </span>
                    </strong>
                    <p className="text-lg leading-relaxed">
                        Our team aims to respond within 24 hours. For urgent issues like booking access or safety concerns, reach us via the{' '}
                        <Link
                            href="/contact-us"
                            className="underline text-black hover:text-sky-500 transition-colors"
                            >Contact Us</Link>{' '}
                        section for faster help.
                    </p>
                </div>

                
                    <h2 className="text-3xl font-bold text-black tracking-tight">
                        General
                    </h2>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        Q: How is the MediCN different from Airbnb or VRBO?</strong>
                    <p className="text-lg leading-relaxed">
                        We're designed exclusively for healthcare workers. This means:
                    </p>
                
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            Verified medical professionals and students only
                        </li>
                        <li>
                            Listings tailored for rotations, residencies, and temporary assignments
                        </li>
                        <li>
                            Lower, fairer fees compared to big platforms
                        </li>
                        <li>
                            A supportive community of hosts who value healthcare workers
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <strong className="text-xl font-bold text-black tracking-tight">
                        <span>Q: What if I need help?</span>
                    </strong>
                    <p className="text-lg leading-relaxed">
                        Our support team is here for you. You can reach us anytime through the{' '}
                        <Link
                            href="/contact-us"
                            className="inline-block underline text-black hover:text-sky-500 transition-colors"
                        >Contact Us</Link>{' '}
                        page or by email at [insert email].
                    </p>
                </div>
            </div>
        </div>
    )
}