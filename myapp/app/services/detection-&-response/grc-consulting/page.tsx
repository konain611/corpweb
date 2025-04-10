import Return from "@/app/components/return";
import Image from "next/image";

export default function GRCConsulting() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className="relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/D&R/banner.png"
                            alt="GRC Consulting Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            GRC Consulting
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="grc image"
                                src="/D&R/GRC.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

                            <p className="mb-8 leading-relaxed">
                                Threat Assurance GRC Solution is a suite of modules covering entire enterprise business and operational sectors. It includes — Audit Management, Business Resiliency, Risk Management, Enterprise & Operational Management, Third Party Governance, Regulatory Compliance Management, and Public Sector solutions.
                                Threat Assurance GRC Solution is available on SaaS based model hosted on DIGINFO state of the Art lock down secured Cloud and On-Premises model.                            </p>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                Threat Assurance GRC Solution Modules
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                1. Asset Management <br></br>
                                2. Vulnerability Management<br></br>
                                3. Threat Management<br></br>
                                4. Risk Management<br></br>
                                5. Compliance Management<br></br>
                                6. Audit Management<br></br>
                                7. Governance & Policy Management<br></br>
                                8. Identity and Access Management<br></br>
                                9. Incident Management<br></br>
                                10. Business Continuity Management<br></br>
                                11. Change Management<br></br>
                                12. Workflow Management<br></br>
                                13. Business Process Management<br></br>
                                14. Third Party and Vendor Management
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}