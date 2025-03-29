import Return from "@/app/components/return";
import Image from "next/image";

export default function ThreatAssurance() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/ThreatAssurance/th-ass.png"
                            alt="Threat Assurance Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Threat Assurance
                        </h1>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            Proactive security measures to protect your digital assets from evolving threats
                        </p>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="threat logo"
                                src="/ThreatAssurance/th-logo.png"
                                width={600}
                                height={300}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="threat image"
                                src="/ThreatAssurance/threatimage.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                WE LIKE TO CONFRONT THREATS WHEN THEY HAVE NOT YET GROWN OUT OF PROPORTION.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Threats lurk around for some time before becoming ominous. The right time to make a strike is when they are not yet in the dangerous zone. Threat Assurance is a suite of modules covering entire enterprise business and operational sectors. It includes Audit Management, Business Resilience, Risk Management, Enterprise & Operational Management, Third Party Governance, Regulatory Compliance Management, and Public Sector solutions. Threat Assurance GRC Solution is available on SaaS based model hosted on DIGINFO state-of-the-art lock down secured Cloud and On Premises model.
                            </p>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                Threat Assurance GRC Solution Modules
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                1. Asset Management <br></br>
                                2. Configuration Management<br></br>
                                3. Service Catalogue and Management<br></br>
                                4. Vulnerability Management<br></br>
                                5. Threat Management<br></br>
                                6. Risk Management<br></br>
                                7. Compliance and Legal Management<br></br>
                                8. Audit Management<br></br>
                                9. Governance & Policy Management<br></br>
                                10. Project Management<br></br>
                                11. Identity and Access Management<br></br>
                                12. Incident Management<br></br>
                                13. Business Continuity Management<br></br>
                                14. Change Management<br></br>
                                15. Workflow Management<br></br>
                                16. Business Process Management<br></br>
                                17. Third Party and Vendor Management<br></br>
                                18. Service Level Agreement (SLA) Management<br></br>
                                19. Learning Management System<br></br>
                                20. Knowledge Center, Announcement and Blogs
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Return/>
        </div>
    );
}