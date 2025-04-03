import Return from "@/app/components/return";
import Image from "next/image";

export default function CSConsulting() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/D&R/banner.png"
                            alt="CS Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Cyber Security Consulting
                            and Advisory Services
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="CS CONSULTING image"
                                src="/D&R/AdvisoryServices.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

                            <p className="mb-8 leading-relaxed">
                                DIGINFO Cyber Security consulting and advisory services provides industry-leading cyber security assessment, incident management, threat intelligence and Architecture Review. Our services help organizations effectively detect and respond to threats and provide business resilience.
                                Our methodology is based on People, Process and Technology, we starts with security assessment, study of existing security controls and effective measurements based on series of information gathering activities to have full deep dive understanding of real issues.
                                After having full visibility, our SMEs lead and guide customer with specially crafted workshops, seminars and real time alerts and notifications.
                                Our services help organizations effectively detect and respond to threats and reduce overall impact of corporate business risk.
                                Advisory services are fully automated by our core product DG Enterprise orchestrator.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-[#F7F7F7] py-12 px-4 sm:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl font-bold text-[#003366] text-center mb-8">
                                Details
                            </h2>
                            <div className="space-y-8">
                                <p className="text-[#003366]">
                                    All of our security assess is based on our Cyber Resilience Readiness Program (CRRP). The objective is to conduct a Cyber Resilience Readiness Program of the assorted technology solutions and services at our customer, focused on improving overall digital resilience and leading to an enhanced maturity of the organization&apos;s cyber security controls and reduced risk footprint or profile.
                                </p>
                            </div>
                            <h2 className="text-2xl font-bold text-[#003366] text-center my-8">
                                General Overview & Objectives
                            </h2>
                            <div className="space-y-8">
                                <p className="text-[#003366]">
                                    The following are key high-level objectives the program is focused on, with a goal to de-risk and secure in the scope customer ecosystem. Key business drivers for this initiative are to ensure minimal threat footprint to the customer Platform, enabling and driving trust and to secure experience with employees, customers, and partners. The mandate in order to achieve this are to:<br></br>
                                    <br></br>1. Cyber Security Risk Management, Strategy and Roadmap design, build and implement <br></br>
                                    2. Alignment with International Cyber Security Best Practices <br></br>
                                    3. Agility and pro-activeness in managing cyber threats <br></br>
                                    4. Enhance credibility to compete in international/global market<br></br>
                                    5. Avoid reputation and financial loss resulting from breach<br></br>
                                    6. Enhancing customer/partner trust and confidence<br></br>
                                    7. Minimize business disruption and loss due to downtime.<br></br>
                                    8. Compliance to regulations for national security agencies<br></br>
                                    9. Cost effectively managing Cyber Security.<br></br>
                                    10. Maintain the confidentiality, integrity & availability of confidential/sensitive information.<br></br>
                                    11. Enforce &apos;Security by Design&apos;, during requirements, design, architecting and deployment.<br></br>
                                    12. Baseline with industry standards: – NIST 800-53 CSF, ITU-T, GSMA IoT/M2M framework /guidelines.<br></br>
                                    13. Conduct in depth review and identify potential business, technology, and process risks.<br></br>
                                    14. Identify appropriate mitigation strategy to address business, technology, & process risk.<br></br>
                                    15. Build active ownership and accountability for sustaining and enhancing security posture.<br></br>
                                    16. Enforce controls to meet corporate policy, statutory, regulatory, & privacy requirement.<br></br>
                                    17. Baseline organization&apos;s risk posture & enable ongoing governance for security initiative.<br></br>
                                    18. Enhance effectiveness of monitoring, identifying, and managing security risks/incidents.<br></br>
                                    19. Establish robust management framework to effectively manage internal/external risks.<br></br>
                                    20. Establish governance framework with direction/purpose aligned with organization goal.<br></br>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Return />
        </div>
    );
}