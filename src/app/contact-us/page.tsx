import Link from 'next/link';
import { Separator } from "@/components/ui/separator";

export default function ContactUsPage() {
    return (
        <div className="w-full flex flex-col bg-[#FFFFFF] py-12">
            <div className="w-full flex flex-col items-center py-12">
                <h1 className="text-4xl font-extrabold text-black md:text-5xl tracking-tight leading-tight drop-shadow-md">
                    Contact Us
                </h1>

                <p className="text-black text-2xl leading-relaxed">
                    Want to get in touch? We'd love to hear from you!
                </p>
            </div>

            <div className="w-full flex flex-col items-start max-w-3xl mx-auto gap-6">
                <p className="text-lg text-black leading-relaxed">
                    Whether you're a healthcare professional looking for housing, a host with questions about listing your property, or just curious about The MediCN, we're here to help.
                </p>

                <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                    <li>
                        <strong className="font-bold text-black tracking-tight">
                            <span className="font-bold">📧 Email us anytime:</span>
                        </strong>
                        {' '}
                        <Link
                            href="/"
                            className="underline text-black hover:text-sky-500 transition-colors"
                        >support@themedicn.com
                        </Link>
                    </li>

                    <li>
                        <strong className="font-bold text-black tracking-tight">
                            <span className="font-bold">✉️  Send us a letter:</span>
                        </strong>
                        {' '}
                        <span>The MediCN, PO Box 180052, Austin, TX 78718</span>
                    </li>
                </ul>

                <p className="text-lg text-black leading-relaxed">
                    We'll do our best to respond within{' '}
                    <strong className="tracking-tight font-bold">24-48 hours</strong>{' '}
                    <span>(next business day if weekends).</span>
                </p>

                <Separator/>
            </div>

            <div className="w-full flex flex-col items-start max-w-3xl mx-auto gap-6">
                <h2 className="text-3xl font-bold text-black tracking-tight">
                    Additional Information
                </h2>

                <p className="text-lg text-black leading-relaxed">
                    Verification requests are usually processed within 1-2 business days.
                </p>

                <p className="text-lg text-black leading-relaxed">
                    For urgent issues during a stay (like safety or access problems), please put{' '}
                    <strong className="tracking-tight font-bold">"Urgent"</strong>
                    <span>in the subject line so we can prioritize your request.</span>
                </p>

                <Separator/>
            </div>

            <div className="w-full flex flex-col items-start max-w-3xl mx-auto gap-6">
                <h2 className="text-3xl font-bold text-black tracking-tight">
                    Stay In Touch
                </h2>

                <p className="text-lg text-black leading-relaxed">
                    Follow us on social media for updates and community stories:
                </p>

                <p className="text-lg text-black leading-relaxed">
                    <Link
                        href="https://www.instagram.com/themedicn/"
                        className="underline text-black hover:text-sky-500 transition-colors">Instagram</Link>{' '}
                    <span>•</span>{' '}
                    <Link href="https://www.facebook.com/profile.php?id=61579254820054">Facebook</Link>{' '}
                    <span>•</span>{' '}
                    <Link href="">[Linkedin]</Link>{' '}
                    <span>•</span>{' '}
                    <Link href="">[Tiktok]</Link>
                </p>
                    
            </div>
        </div>
    )
}