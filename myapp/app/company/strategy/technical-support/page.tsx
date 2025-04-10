import Return from "@/app/components/return";
import Image from "next/image";

export default function KnowledgeBase() {
    return (
        <div className="bg-white">

            <section className="relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DGEdge/banner.png"
                        alt="Tech support"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Technical Support
                    </h1>
                </div>
            </section>

            <div className="bg-white py-12 px-4 sm:px-8">
                
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-8">


                        <p className="text-[#003366]">
                            At DIGINFO, we understand that technology is constantly evolving, and so are the threats that come with it. That’s why we offer comprehensive technical support services to help our clients stay protected and up-to-date with the latest security measures.
                        </p>
                        <p className="text-[#003366]">
                            Our technical support team consists of highly skilled professionals with years of experience in the industry. They are available 24/7 to provide assistance and ensure that any issues of cybebrsecurity are resolved quickly and efficiently.
                        </p>
                        <p className="text-[#003366]">
                            We also offer ongoing support to ensure that your systems are always running smoothly and protected from the latest threats and incidents. Our team stays up-to-date on the latest security trends and technologies, so you can rest assured that you are always protected with the latest defenses.
                        </p>
                        <p className="text-[#003366]">
                            At DIGINFO, we believe that technical support is a critical component of effective security. That’s why we offer comprehensive support services to help our clients stay protected and confident in their security posture.
                        </p>

                    </div>
                </div>


                <div className="bg-[#F7F7F7] p-8 mt-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl font-bold text-[#003366]  mb-6">Technical Support</h1>
                        <p className="text-[#003366] mb-8">
                            Your success is our highest priority, which is why we&apos;re committed to you throughout your entire customer experience. From implementation onward, DIGINFO is dedicated to helping you achieve the best possible business outcomes.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Card 1 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h2 className="text-xl font-semibold text-[#003366] mb-3">Central Support Community</h2>
                                <p className="text-[#003366]">
                                    Website for DIGINFO customers to share ideas, connect with other customers, access product information and Knowledge Base, and receive service updates.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h2 className="text-xl font-semibold text-[#003366] mb-3">Online Support Case SLA</h2>
                                <p className="text-[#003366]">
                                    Receive responses to your initial online support case queries within 3 business hours.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h2 className="text-xl font-semibold text-[#003366] mb-3">Technical Account Manager</h2>
                                <p className="text-[#003366]">
                                    Work with a specialist to help make changes to your subscription, assist you during mergers and acquisitions, or change partners.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h2 className="text-xl font-semibold text-[#003366] mb-3">Priority Phone Support Routing</h2>
                                <p className="text-[#003366]">
                                    Senior Technical Support Engineers will be available to pick up your support cases directly.
                                </p>
                            </div>

                            {/* Card 5 - Full width */}
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 md:col-span-2">
                                <h2 className="text-xl font-semibold text-[#003366] mb-3">System Optimization Assessment</h2>
                                <p className="text-[#003366]">
                                    An annual detailed review of your Mimecast environment. Will ensure your systems are optimized and working effectively.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Return />
        </div>
    )
}