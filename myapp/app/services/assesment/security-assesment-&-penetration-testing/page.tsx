import Return from "@/app/components/return";
import Image from "next/image";

export default function SecurityAssesment() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Assesment/banner.png"
                            alt="Background"
                            fill
                            className="absolute inset-0 object-cover"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Security Assessment and
                        Penetration Testing
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="pen test image"
                                src="/Assesment/cloud.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                            DIGINFO Cyber Security Assessment team helps secure Infrastructure and Applications of your business. We assess, detect and mitigate vulnerabilities in critical devices, applications, and networks. Our Red, Blue, and Green teams work with you end to end till all vulnerabilities are removed and your business turn robust, reliable and productive again.
                            </p>

                            <h1 className="text-2xl mb-5">Details</h1>
                           
                            <p className="mb-8 leading-relaxed">
                                DIGINFO Cyber Security Assessment team mainly focus to remove vulnerabilities most found in below domains
                            </p>
                            <p className="mb-8 leading-relaxed">
                                1. Infrastructure security assessments<br />
                                2. Application security assessments<br />
                                3. Application source code assessment<br />
                                4. IoT device security assessments<br />
                                5. Red teaming<br />
                                6. Blue teaming<br />
                                7. Green teaming
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Return />
        </div>
    );
}