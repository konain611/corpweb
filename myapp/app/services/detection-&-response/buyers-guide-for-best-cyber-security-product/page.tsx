import Return from "@/app/components/return";
import Image from "next/image";

export default function BuyersGuide() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className="relative min-h-[300px] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/D&R/banner.png"
                            alt="CS Background"
                            fill
                            className="absolute inset-0 object-cover"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Buyers guide for best Cyber Security product
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="guide image"
                                src="/D&R/ByersGuide.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                Choosing a best fit cybersecurity system is a big decision for a customer, there is complete cycle of understanding customer requirement, size, scope and technology.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                At DIGINFO we relief customer from time and efforts by providing a detailed Buyer&apos;s guide for Best Cyber Security Product which is a byproduct of our legendary Best Cyber Security Product Report.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Buyers Guide for Cyber Security Product is one of the unique product of DIGINFO which directly helps Cyber community at free of cost.
                                This guide makes recommendations based on the result of Best Cyber Security Product Evaluation results.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Buyers Guide product selection recommendations is based on below criteria.<br />
                                1. Type of Industry<br />
                                2. Type of Business<br />
                                3. Size of Business<br />
                                4. Customer Security Posture<br />
                                5. Customer Incident Severity<br />
                                6. Customer Budget<br />
                                7. Customer Target Location
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Return />
        </div>
    );
}