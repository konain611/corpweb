import Return from "@/app/components/return";
import Image from "next/image";

export default function Policy() {
    return (
        <div className="bg-white">
            <section className="relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/CompanySupport/1.png"
                        alt="Company Review Banner"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Policy
                    </h1>
                </div>
            </section>

            <section className="container px-5 py-25 mx-auto">
                <div className=" flex flex-col items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                        DIGINFO PRIVACY POLICY
                    </h1>
                </div>
            </section>

            <section>
                <div className="legal-documents max-w-5xl mx-auto p-6 text-gray-700">
                    {/* Privacy Policy Section */}
                    <section className="mb-12">

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What information do we collect?</h2>
                            <p className="mb-4">
                                We collect information from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.
                            </p>
                            <p className="mb-4">
                                When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, mailing address, phone number or credit card information. You may, however, visit our site anonymously.
                            </p>
                            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <p className="mb-2">
                                    Google, as a third party vendor, uses cookies to serve ads on your site.
                                </p>
                                <p className="mb-2">
                                    Google&apos;s use of the DART cookie enables it to serve ads to your users based on their visit to your sites and other sites on the Internet.
                                </p>
                                <p>
                                    Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy.
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">What is the purpose of your information?</h2>
                            <p className="mb-4">
                                Any of the information we collect from you may be used in one of the following ways:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>To personalize your experience (your information helps us to better respond to your individual needs)</li>
                                <li>To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
                                <li>To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
                                <li>To process transactions</li>
                                <li>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
                                <li>To administer a contest, promotion, survey or other site feature</li>
                                <li>To send periodic emails</li>
                            </ul>
                            <p className="mb-4">
                                The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.
                            </p>
                            <p className="italic text-gray-600">
                                Note: If, at any time, you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">How do we protect your information?</h2>
                            <p className="mb-4">
                                We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
                            </p>
                            <p className="mb-4">
                                We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
                            </p>
                            <p>
                                After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be kept on file for more than 60 days.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Do we use cookies?</h2>
                            <p className="mb-4">
                                Yes (Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
                            </p>
                            <p className="mb-4">
                                We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Do we disclose any information to outside parties?</h2>
                            <p className="mb-4">
                                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Third party links</h2>
                            <p className="mb-4">
                                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Terms and Conditions</h2>
                            <p className="mb-4">
                                Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at <a href="https://diginfo.net/terms-and-conditions" className="text-blue-600 hover:underline">https://diginfo.net/terms-and-conditions</a>
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Your Consent</h2>
                            <p className="mb-4">
                                By using our site, you consent to our privacy policy.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Changes to our Privacy Policy</h2>
                            <p className="mb-4">
                                If we decide to change our privacy policy, we will post those changes on this page.
                            </p>
                            <p>
                                This policy was last modified on 01/05/2020
                            </p>
                        </div>
                    </section>

                    {/* Terms & Conditions Section */}
                    <section>
                        <section className="container px-5 py-25 mx-auto">
                            <div className=" flex flex-col items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                    DIGINFO TERMS & CONDITIONS
                                </h1>
                            </div>
                        </section>
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Terms of Use</h2>
                        <p className="mb-6">
                            This Agreement sets forth the terms and conditions which apply to the use by you of the Digital Information Systems (DIGINFO) website (as defined below) and any other subscription product or service offered for sale by DIGINFO and/or its affiliates (collectively, &quot;DIGINFO&quot;). The right to use any product or service offered by DIGINFO is personal to you and is not transferable to any other person or entity.
                        </p>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Definitions.</h3>
                            <p className="mb-4">
                                The &quot;DIGINFO site&quot; shall mean all areas and any subscription or other paid products and services offered or available on the interactive online service operated by DIGINFO on the World Wide Web including but not limited to www.diginfo.net, DGACADEMY.NET, DGMAGAZINE.NET, NATIVESECURITY.ORG and THREATASSURANCE.COM and any related domains or sub-domains. The DIGINFO site consists of information services and content provided by DIGINFO, affiliates of DIGINFO and third parties.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">General</h3>
                            <p className="mb-4">
                                DIGINFO shall have the right, at any time, to change or discontinue any aspect or feature of the DIGINFO site including, but not limited to site content, hours of availability, and equipment needed for access or use. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including but not limited to, posting on the site, a revised version of this Agreement or notification via e-mail or other means that have been mutually agreed to by you, our subscribers.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Use of the DIGINFO Site</h3>
                            <p className="mb-4">
                                a. The DIGINFO site and the content we provide shall be used for lawful purposes only. No material shall be posted on or transmitted through DIGINFO which violates or infringes in any way upon the rights of others, which is unlawful, threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar, obscene, profane, indecent or otherwise objectionable, which encourages conduct that would constitute a criminal offence, gives rise to civil liability or otherwise violates any law. Advertising or commercial solicitation may be posted on or transmitted through the DIGINFO Site but only with DIGINFO&apos;s express prior approval and only if the advertising or commercial solicitation complies with all conditions imposed by DIGINFO.
                            </p>
                            <p className="mb-4">
                                B. The DIGINFO site contains copyrighted material; trademarks and other proprietary information including text, software, photos, video, graphics, music and sound, and the entire contents of the DIGINFO Site are copyrighted as a collective work under the international copyright laws. DIGINFO is the owner of the copyright in the entire DIGINFO site. DIGINFO owns a copyright in the selection, coordination, arrangement and enhancement of such content, as well as in the content original to it. Each third party content provider owns the copyright in content original to it. You may not modify, publish, transmit, display, participate in the transfer or sale, create derivative works, or in any way exploit the content of the DIGINFO site or any portion of it. Except as otherwise expressly permitted under copyright law, you may not copy, redistribute, publish, display or commercially exploit any material from the DIGINFO site without the express permission of DIGINFO and the copyright owner. In the event of any permitted copying, redistribution or publication of material from the DIGINFO site, no changes in or deletion of author attribution, trademark, and legend or copyright notice shall be made. You acknowledge that you do not acquire any ownership rights by downloading copyrighted material. Without limiting the generality of the foregoing, you agree that any text, photo, graphics, audio, and/or video on the DIGINFO site shall not be broadcast, rewritten for broadcast or publication or redistributed directly or indirectly in any media.
                            </p>
                            <p className="mb-4">
                                c. The DIGINFO site contains links to other web sites, resources and advertisers. DIGINFO is not responsible for the availability of these external sites nor does it endorse or is it responsible for the contents, advertising, products or other materials made available on or through such external sites. Under no circumstances shall DIGINFO be held responsible or liable, directly or indirectly, for any loss or damage caused or alleged to have been caused to a user in connection with the use of or reliance on any content, goods or services available on such external site. You should direct any concerns to such external site&apos;s administrator or webmaster.
                            </p>
                            <p className="mb-4">
                                d. You shall be responsible for obtaining and maintaining all telephone, computer hardware and other equipment needed for access to and use of the DIGINFO site and all of your costs related thereto.
                            </p>
                            <p className="mb-4">
                                e. The foregoing provisions of this Section 3 are for the benefit of DIGINFO, its affiliates, third party content providers and licensors, and each shall have the right to assert and enforce such provisions directly on its own behalf.
                            </p>
                            <p>
                                f. DIGINFO has carefully designed the DIGINFO site with the purpose of delivering certain content to users in a particular format and with a particular appearance. No third party shall have the right to utilize the content of the DIGINFO site in any way that interferes with that purpose. In particular, DIGINFO prohibits any party from displaying the content on the DIGINFO site in any format where third party advertising or other materials that DIGINFO did not authorize is viewed or viewable together with DIGINFO&apos;s proprietary content.
                            </p>
                        </div>



                    </section>

                    <section>
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Disclaimer of Warranty; Limitation of Liability</h3>
                            <p className="mb-4">
                                a. You expressly agree that use of the DIGINFO site is at your sole risk. Neither DIGINFO, its affiliates or any of their respective employees, agents, third party content providers or licensors warrant that the DIGINFO site will be uninterrupted or error free; nor do they make any warranty as to the results that may be obtained from use of the DIGINFO site or as to the accuracy, reliability or content of any information, service or products provided through the website or e-mail.
                            </p>
                            <p className="mb-4">
                                b. The DIGINFO site is provided on an &quot;As Is&quot;, &quot;As Available&quot; basis without warranties of any kind, either expressed or implied, including but not limited to warranties of title or implied warranties if merchantability or fitness for a particular purpose, other than those warranties which are implied by and incapable of exclusion, restriction or modification under the laws applicable to this agreement.
                            </p>
                            <p className="mb-4">
                                c. The Disclaimers of liability contained in this section 5 apply to any damages or injury caused by any failure or performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of record, whether for breach of contract, tortuous behavior, negligence, or under any other cause of action. You specifically acknowledge that DIGINFO is not liable for the defamatory, offensive or illegal conduct of other users or third parties and that the risk of injury from the foregoing rests entirely with you.
                            </p>
                            <p className="mb-4">
                                d. DIGINFO does not endorse, warrant or guarantee any products or services offered through the DIGINFO site and will not be a party to or in any way monitor any transaction between users and third party providers of products or services. As with the purchase of a product or service through any medium or in any environment, you should use your best judgment and exercise caution where appropriate. DIGINFO makes products or service available on the DIGINFO site without warranties of any kind, either express or implied, including but not limited to warranties of title or implied warranties of merchantability or fitness for a particular purpose, other than those warranties which are implied by and incapable of exclusion, restriction or modification under the laws applicable to this agreement.
                            </p>
                            <p className="mb-4">
                                e. In no event will DIGINFO or any person or entity involved in creating, producing or distributing the DIGINFO site be liable for any direct, indirect, incidental, special or consequential damages arising out of the use of or inability to use the DIGINFO site or out of the breach of any warranty. You hereby acknowledge that the provisions of this section 5 shall apply to all content on the DIGINFO site and/or any electronically delivered content provided by DIGINFO to you. DIGINFO&apos;s liability to users, if any, shall in no event exceed the total amount paid to DIGINFO.
                            </p>
                            <p className="mb-4">
                                f. DIGINFO neither endorses nor is responsible for the accuracy or reliability of any opinion, advice or statement on the DIGINFO site. Under no circumstances will DIGINFO be liable for any loss or damage caused by your reliance on information obtained through the content on the DIGINFO site. It is your responsibility to evaluate the accuracy, completeness or usefulness of any information, opinion, advice or other content available through the DIGINFO site. Please seek the advice of a legal and/or information security professional, as appropriate, regarding the evaluation of any specific information, opinion, advice or other content, including but not limited to financial, health, or lifestyle information, opinion, advice or other content.
                            </p>
                            <p>
                                g. Prior to the execution of a purchase or sale of any security or investment, you are advised to consult with your broker or other financial advisor to verify pricing and other information. Neither DIGINFO nor its third party content providers shall have any liability for investment decisions based upon, or the results obtained from, the content provided herein. Neither DIGINFO nor its third party content providers guarantee or warrant the timeliness, sequence, accuracy, or completeness of any such information. Nothing contained in the DIGINFO site shall be construed as investment advice. DIGINFO is not a registered broker-dealer or investment advisor and does not give investment advice.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Indemnification</h3>
                            <p>
                                You agree to defend, indemnify and hold harmless DIGINFO, its affiliates and their respective directors, officers, employees and agents from and against all claims and expenses, including attorney&apos;s fees, arising out of the use by you of the DIGINFO site.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Termination</h3>
                            <p className="mb-4">
                                DIGINFO shall have the right to immediately terminate this Agreement with respect to any user which DIGINFO, in its sole discretion, considers to be unacceptable, or in the event of any breach by you of this Agreement. The provisions of Sections 5, 6, 7, 8 and 9 shall survive termination of this Agreement.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Trademarks</h3>
                            <p>
                                All trademarks appearing on the DIGINFO site are the property of their respective owners, including, in some instances, DIGINFO.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Subscription Services; Products.</h3>
                            <p className="mb-4">
                                (A) Subscription Services. DIGINFO makes available to users certain online subscription services, and other paid services and products. The following terms and conditions shall apply in the event that you subscribe to any subscription service or services offered by DIGINFO on the DIGINFO site and/or via electronic transmission including but not limited to e-mail (the &quot;Subscription&quot;):
                            </p>
                            <p className="mb-4">
                                a. Subscription Terms. We currently offer a number of subscription terms: monthly e-mail delivery of our Cyber Warnings newsletter and quarterly delivery of our Cyber Security Magazine DGMAGAZINE. We also offer continuous subscription terms, in the instance that you are offered and accept a continuous subscription service, your subscription will continue until DIGINFO receives notification of termination from you as described in subsection c below. In this process you authorize DIGINFO to charge the credit card or bank account, you provided during the registration process, the current fees and charges for each subsequent term according to the subscription plan chosen by you. If you subscribed for a term of one (1) year or more of our PRINT edition, you will be notified by DIGINFO before the account designated by you lapses, after your first term.
                            </p>
                            <p className="mb-4">
                                You are responsible for any charges associated to connecting to the DIGINFO Site, including but not limited to, any telephone line charges or any Internet access provider charges. You shall provide DIGINFO with accurate, complete and updated information as to your name and e-mail address and credit card account information provided by you at registration. Failure to do so shall constitute a breach of this Agreement.
                            </p>
                            <p className="mb-4">
                                b. Changed Terms. DIGINFO shall have the right at any time to impose, change or modify its fees and billing methods, or other terms and conditions applicable to your use of the Subscription or to impose new terms and conditions. Such changes, modifications, additions or deletions shall be effective immediately upon notice thereof, which may be given by means including, but not limited to, posting on the DIGINFO Site a revised version of this Agreement or notification by electronic or conventional mail. If any such change is unacceptable to you, you may terminate your Subscription as provided in subsection C below. Any use of the Subscription by you after such notice shall conclusively be deemed to constitute acceptance by you of such changes, modifications, additions or deletions. You agree to review the terms and conditions periodically to be aware of such revisions. You may also be subject to additional terms and conditions imposed by third party content providers in connection with third party content, software or services.
                            </p>
                            <p className="mb-4">
                                c. Termination. Either you or DIGINFO may terminate this Agreement at any time. Your only right with respect to any dissatisfaction with (i) any terms and conditions of this Agreement, or policy or practice of DIGINFO in operating the DIGINFO site; (ii) content available through the Subscription or change therein, or (iii) amount or type of fees or billing methods, or change therein, is to terminate this Agreement by sending notice to DIGINFO via e-mail to info@diginfo.net or to our address listed at the bottom of every Web page on our Web site. Notice of termination will be effective upon receipt by DIGINFO. Without limiting the foregoing, DIGINFO shall have the right to immediately terminate this Agreement with respect to any user which DIGINFO, in its sole discretion, considers to be unacceptable, or in the event of any breach by you of this Agreement. In the event that your account is terminated or cancelled, no refund of any fees, including monthly membership fee, will be granted. The provisions of Sections 5, 6, 7, 8 and this Section 10 shall survive termination of this Agreement. Fees paid for any subscription are paid in advance and are not refundable in whole or in part, provided, however, that in the event of termination by DIGINFO for any reason other than breach of this Agreement by you or termination by you in accordance with this subsection c of this Agreement in which you identify the termination as resulting from changed terms, DIGINFO shall make a pro rata refund to you.
                            </p>
                            <p>
                                (B) Products and Other Services. With respect to products and services offered for sale by DIGINFO and third parties or through the DIGINFO site: you shall be informed of all terms of the offer, including but not limited to pricing, methods of payment, shipping and handling, credit card information, sales tax, return and refund policies and applicable privacy policies on the screen where you make the purchase.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Miscellaneous.</h3>
                            <p className="mb-4">
                                This Agreement and any operating rules for the DIGINFO site established by DIGINFO constitute the entire agreement of the parties with respect to the subject matter hereof, and supersede all previous written or oral agreements between the parties with respect to such subject matter. This Agreement shall be construed in accordance with the laws of the Pakistan, without regard to its conflict of laws rules. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. The section headings used herein are for convenience only and shall not be given any legal import.
                            </p>
                        </div>
                    </section>
                </div>
            </section>

            <Return />
        </div>
    )
}