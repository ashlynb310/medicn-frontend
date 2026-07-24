import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

export default function TermsOfServicePage() {
    return (
        <div className="w-full flex flex-col bg-[#FFFFFF]">
            <div className="w-full flex flex-col items-center gap-3">
                <h1 className="text-4xl font-extrabold text-black md:text-6xl tracking-tight leading-tight drop-shadow-md">
                    Terms of Service
                </h1>
            </div>

            <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full items-start text-left py-12">
                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    Terms of Service
                </h2>

                <p className="text-black font-semibold text-lg leading-relaxed">
                    Last updated: [8/22/25]
                </p>

                <p className="text-black text-lg leading-relaxed">
                    Please read these terms of service carefully before using Our Service.
                </p>

                <p className="text-black text-lg leading-relaxed">
                    These Terms of Service (“Terms”) govern your access to and use of The MediCN platform (“The MediCN,” “we,” “our,” or “us”),
                    including our website, applications, services, and tools (collectively, the “Platform”).
                    By accessing or using The MediCN, you agree to be bound by these Terms.
                    If you do not agree, you may not use The MediCN.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    1. About The MediCN
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    The MediCN is a housing marketplace designed exclusively for healthcare professionals.
                    We connect verified healthcare workers seeking housing with hosts offering short-term and long-term accommodations.
                    The MediCN is not a real estate broker, property manager, or insurer.
                    We provide the platform that enables connections, but we are not a party to rental agreements between hosts and guests.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    2. Eligibility
                </h2>
                
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>You must be at least 18 years old and able to form a legally binding contract.</li>
                    <li>Guests must be verified healthcare professionals.</li>
                    <li>By using the Platform, you represent that you meet these requirements.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    3. Accounts and Verification
                </h2>
                
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>To use The MediCN, you must create an account and provide accurate information.</li>
                    <li>We may require verification of your healthcare professional status and identification.</li>
                    <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    4. Role of The MediCN
                </h2>
                
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>The MediCN provides a platform where hosts and healthcare professionals can connect.</li>
                    <li>We do not own, operate, or manage listings. All rental agreements are solely between hosts and guests.</li>
                    <li>We are not responsible for the conduct of users, though we encourage safe and respectful interactions.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    5. Fees and Payments
                </h2>
                
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Guests agree to pay the total booking amount, including listing price, service fees, and applicable taxes.</li>
                    <li>Hosts agree that The MediCN may collect fees on their behalf and remit payouts as specified.</li>
                    <li>Fees are non-refundable except as expressly stated in these Terms or the Cancellation Policy.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    6. Cancellation Policy
                </h2>
                
                <p className="text-black text-lg leading-relaxed">
                    To provide fairness and flexibility for both healthcare professionals (guests) and hosts,
                    The MediCN follows a cancellation framework modeled after Airbnb.
                    Each host may select one of the following policies for their listing:
                </p>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">6.1. Flexible</h3>
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Cancel up to 24 hours before check-in: full refund.</li>
                    <li>Cancel within 24 hours of check-in: first night is non-refundable; remaining nights refunded.</li>
                    <li>Early departure: 100% of unused nights refunded.</li>
                </ul>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">6.2. Moderate</h3>
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Cancel up to 5 days before check-in: full refund.</li>
                    <li>Cancel within 5 days of check-in: first night is non-refundable; 50% of remaining nights refunded.</li>
                    <li>Early departure: 50% of unused nights refunded.</li>
                </ul>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">6.3. Strict</h3>
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Cancel up to 7 days before check-in: 50% refund of total booking.</li>
                    <li>Cancel within 7 days of check-in: no refund.</li>
                    <li>Early departure: unused nights non-refundable.</li>
                </ul>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">6.4. Additional Notes</h3>
                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Refunds are processed to the original payment method within 5-10 business days.</li>
                    <li>In rare cases (e.g., verified emergencies, unsafe conditions, or healthcare redeployment), The MediCN may override the policy.</li>
                    <li>Hosts must clearly display their chosen cancellation policy on each listing.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    7. Host Responsibilities
                </h2>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Provide accurate descriptions and photos of listings.</li>
                    <li>Ensure accommodations comply with applicable laws, health, and safety standards.</li>
                    <li>Honor all confirmed bookings and selected cancellation policies.</li>
                    <li>Respect the privacy, dignity, and safety of healthcare professionals.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    8. Guest Responsibilities
                </h2>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Provide accurate information and verify healthcare professional status.</li>
                    <li>Use accommodations respectfully and follow host rules.</li>
                    <li>Pay all fees and comply with cancellation policies.</li>
                    <li>Report any unsafe or misleading listings to The MediCN.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    9. Prohibited Activities
                </h2>

                <p className="text-black text-lg leading-relaxed">You may not:</p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>Misrepresent your identity, profession, or listing details.</li>
                    <li>Discriminate against others based on race, gender, religion, disability, or any protected status.</li>
                    <li>Use the Platform for commercial purposes unrelated to housing for healthcare professionals.</li>
                    <li>Damage, misuse, or steal from any listing.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    10. Limitation of Liability
                </h2>

                <p className="text-black text-lg leading-relaxed">You may not:</p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>The MediCN is not responsible for disputes, damages, or losses arising from interactions between hosts and guests.</li>
                    <li>Our liability is limited to the maximum extent permitted by law.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    11. Dispute Resolution
                </h2>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>We encourage hosts and guests to resolve disputes directly.</li>
                    <li>If unresolved, you may contact The MediCN for limited mediation support.</li>
                    <li>These Terms are governed by the laws of [Your State], and any disputes shall be resolved in its courts.</li>
                </ul>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    12. Changes to These Terms
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    We may update these Terms from time to time. We will notify users of material changes.
                    Continued use of the Platform constitutes acceptance of revised Terms.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    13. Contact Us
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    For questions or concerns about these Terms, please contact us at: support@themedicn.com
                </p>
            </div>
        </div>
    )
}