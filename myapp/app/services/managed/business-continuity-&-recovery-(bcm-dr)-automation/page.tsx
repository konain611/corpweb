import Return from "@/app/components/return";
import Image from "next/image";

export default function SecurityAssesment() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className="relative min-h-[300px] flex items-center">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/Managed/banner.png"
                            alt="Background"
                            fill
                            className="absolute inset-0 object-cover"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">

                            Business Continuity and Disaster
                            Recovery (BCMDR) Automation
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt=" image"
                                src="/Managed/bcr.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                Growing business and missing critical applications must have ensuring continuous availability to meeting customer expectations and boosting organization productivity, emphasizing the importance of robust and proven disaster recovery infrastructure.                            </p>
                            <p className="mb-8 leading-relaxed">
                                DIGINFO helps companies automate DR activities and making sure DR drills meets business continuity RPO & RTO.                            </p>

                            <h1 className="text-2xl mb-5 font-bold">Details</h1>

                            <p className="mb-8 leading-relaxed">
                                Our consulting services have full support from our own product known as DGCLOUD and Threat Assurance GRC Platform, DGCLOUD is based on world renowned commercial and open source virtualization and cloud technologies and applications, running on our own cutting edge hardware. Our comprehensive business continuity and disaster recovery plans are fully tested and validated, ensuring that migration has been successful.
                                Our consulting services are as below
                            </p>
                            <p className="mb-8 leading-relaxed">
                                1. Business Continuity & Risk Advisory Consulting<br />
                                2. Enterprise Risk Assessment<br />
                                3. Business Impact Assessment (BIA)<br />
                                4. Recovery Strategy<br />
                                5. Business Continuity Plans<br />
                                6. Recovery Test & Exercise<br />
                                7. DGCLOUD Dashboard & Analytics<br />
                                8. Design & Implement Disaster Recovery site for customer, Building exact replication of<br />
                                9. Production site on DGCLOUD Infrastructure as DR Site with DR automation enablement<br />
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Return />
        </div>
    );
}