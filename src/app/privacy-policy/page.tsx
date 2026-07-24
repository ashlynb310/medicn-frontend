import { Separator } from "@/components/ui/separator";
import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <div className="w-full flex flex-col bg-[#FFFFFF]">
            <div className="w-full flex flex-col items-center py-6 gap-3">
                <h1 className="text-4xl font-extrabold text-black md:text-6xl tracking-tight leading-tight drop-shadow-md">
                    Privacy Policy
                </h1>
            </div>

            <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full items-start text-left py-12">
                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    Privacy Policy for The MediCN
                </h2>

                <p className="text-black font-semibold text-lg leading-relaxed">
                    Last updated: [8/22/25]
                </p>

                <p className="text-black text-lg leading-relaxed">
                    This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service, and tells You about Your privacy rights and how the law protects You.
                </p>

                <p className="text-black text-lg leading-relaxed">
                    We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    1 - Interpretation and Definitions
                </h2>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">
                    1.1 - Interpretation
                </h3>

                <p className="text-black text-lg leading-relaxed">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions.
                    The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
                </p>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">
                    1.2 - Definitions
                </h3>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <p className="text-black text-lg leading-relaxed">
                        For the purposes of this Privacy Policy:
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Account</span>
                            </strong>
                            {' '}
                            <span>
                                means a unique account created for You to access our Service or parts of our Service.
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Company</span>
                            </strong>
                            {' '}
                            <span>
                                (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to
                            </span>
                            {' '}
                            <strong className="font-bold text-black tracking-tight">
                                <span>The MediCN (Medical Community Network).</span>
                            </strong>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Cookies</span>
                            </strong>
                            {' '}
                            <span>
                                are small files placed on Your Device by a website, containing the details of Your browsing history on that website among its many uses.
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Country</span>
                            </strong>
                            {' '}
                            <span>refers to the</span>
                            {' '}
                            <strong className="font-bold text-black tracking-tight">United States</strong>
                            <span>, where The MediCN operates.</span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Devices</span>
                            </strong>
                            {' '}
                            <span>
                                means any device that can access the Service such as a computer, a cellphone, or a digital tablet.
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Personal Data</span>
                            </strong>
                            {' '}
                            <span>
                                is any information that relates to an identified or identifiable individual.
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Service</span>
                            </strong>
                            {' '}
                            <span>
                                refers to the marketplace platform operated by The MediCN.
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Service Provider</span>
                            </strong>
                            {' '}
                            <span>
                                means any natural or legal person who processes data on behalf of the Company.
                                It refers to third-party companies or individuals employed by the Company to facilitate the Service,
                                to provide the Service on behalf of the Company, to perform services related to the Service,
                                or to assist the Company in analyzing how the Service is used.
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Usage Data</span>
                            </strong>
                            {' '}
                            <span>
                                refers to data collected automatically,
                                either generated by the use of the Service or from the Service infrastructure itself
                                (for example, the duration of a page visit).
                            </span>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Website</span>
                            </strong>
                            {' '}
                            <span>to The MediCN, accessible from</span>
                            {' '}
                            <strong className="font-bold text-black tracking-tight">
                                <Link
                                    href="/"
                                    className="underline text-black hover:text-sky-500 transition-colors"
                                >[themedicn.com]</Link>
                            </strong>
                        </li>
                    </ul>

                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">You</span>
                            </strong>
                            {' '}
                            <span>
                                means the individual accessing or using the Service, or the company,
                                or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                            </span>
                        </li>
                    </ul>
                </div>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    2 - Collecting and Using Your Personal Data
                </h2>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">
                    2.1 - Types of Data Collected
                </h3>

                <h4 className="text-2xl font-semibold text-black tracking-tight leading-tight">
                    Personal Data
                </h4>

                <p className="text-black text-lg leading-relaxed">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information, including but not limited to:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                    </ul>
                </div>

                <h4 className="text-2xl font-semibold text-black tracking-tight leading-tight">
                    Usage Data
                </h4>

                <p className="text-black text-lg leading-relaxed">
                    Usage Data is collected automatically when using the Service, including:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>Your Device's IP address</li>
                        <li>Browser type and version</li>
                        <li>Pages visited, time and date of visit, and duration</li>
                        <li>Unique device identifiers and other diagnostic data</li>
                    </ul>
                </div>

                <h4 className="text-2xl font-semibold text-black tracking-tight leading-tight">
                    Cookies and Tracking Technologies
                </h4>

                <p className="text-black text-lg leading-relaxed">
                   We use Cookies and similar tracking technologies to monitor activity on Our Service and store certain information.
                   These technologies include:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Cookies</span>
                            </strong>
                            {' '}
                            <span>small files stored on Your Device.</span>
                        </li>

                        <li>
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">Web Beacons</span>
                            </strong>
                            {' '}
                            <span>electronic files used to count users who have visited pages or opened emails.</span>
                        </li>
                    </ul>
                </div>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">
                    2.2 - Use of Your Personal Data
                </h3>

                <p className="text-black text-lg leading-relaxed">
                    The Company may use Personal Data for the following purposes:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>To provide and maintain our Service.</li>
                        <li>To manage Your Account and registration.</li>
                        <li>To process and manage bookings, transactions, and payments.</li>
                        <li>To contact You by email, phone, or other electronic communication.</li>
                        <li>To provide You with updates, promotions, or relevant information related to the Service.</li>
                        <li>To manage Your requests and customer support.</li>
                        <li>To improve the functionality, safety, and reliability of the Service.</li>
                    </ul>
                </div>

                <h3 className="text-3xl font-semibold text-black tracking-tight leading-tight">
                    2.3 - Sharing of Personal Data
                </h3>

                <p className="text-black text-lg leading-relaxed">
                    We may share Your personal information in the following situations:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>With Service Providers: to monitor and analyze the use of our Service, for payment processing, and to contact You.</li>
                        <li>For business transfers: in the event of a merger, acquisition, or asset sale, Your Personal Data may be transferred.</li>
                        <li>With affiliates: we may share Your information with Our affiliates.</li>
                        <li>With other users: when You share information publicly or interact in areas accessible to other users.</li>
                        <li>As required by law: if compelled by applicable legal obligations.</li>
                    </ul>
                </div>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    3 - Retention of Your Personal Data
                </h2>

                <p className="text-black text-lg leading-relaxed">
                    We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy,
                    and to the extent necessary to comply with legal obligations, resolve disputes, and enforce agreements.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    4 - Transfer of Your Personal Data
                </h2>

                <p className="text-black text-lg leading-relaxed">
                   Your information, including Personal Data, may be processed at the Company's operating offices and in any other place where the parties involved in processing are located.
                   By using the Service, You agree to such transfers.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    5 - Security of Your Personal Data
                </h2>

                <p className="text-black text-lg leading-relaxed">
                   We take the security of Your Personal Data seriously and use commercially acceptable means to protect it.
                   However, no method of transmission over the Internet or method of electronic storage is 100% secure.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    6 - Children's Privacy
                </h2>

                <p className="text-black text-lg leading-relaxed">
                   Our Service does not address anyone under the age of 18.
                   We do not knowingly collect personally identifiable information from minors.
                   If You are a parent or guardian and You become aware that Your child has provided Us with Personal Data, please contact Us.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    7 - Links to Other Websites
                </h2>

                <p className="text-black text-lg leading-relaxed">
                   Our Service may contain links to other websites not operated by Us.
                   We strongly advise You to review the Privacy Policy of every site You visit.
                   We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    8 - Changes to this Privacy Policy
                </h2>

                <p className="text-black text-lg leading-relaxed">
                   We may update Our Privacy Policy from time to time.
                   Changes will be effective when posted on this page.
                   We will notify You by updating the "Last updated" date.
                </p>

                <Separator/>

                <h2 className="text-4xl font-bold text-black tracking-tight leading-tight">
                    9 - Contact Us
                </h2>

                <p className="text-black text-lg leading-relaxed">
                   If you have any questions about this Privacy Policy, You can contact us:
                </p>

                <div className="flex flex-col gap-1.5 max-w-3xl">
                    <ul className="list-disc pl-5 space-y-2 text-lg text-black">
                        <li>
                            <span>By email:</span>
                            {' '}
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">[support@themedicn.com]</span>
                            </strong>
                        </li>

                        <li>
                            <span>By visiting this page on our website:</span>
                            {' '}
                            <strong className="font-bold text-black tracking-tight">
                                <span className="font-bold">[INSERT CONTACT URL]</span>
                            </strong>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}