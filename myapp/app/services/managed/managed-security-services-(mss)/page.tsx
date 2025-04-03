import Return from "@/app/components/return";
import Image from "next/image";

export default function MSS() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">
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
                            Managed Security Services (MSS)
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="mss image"
                                src="/Managed/mss.png"
                                width={1200}
                                height={1700}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-4 leading-relaxed">
                                DIGINFO Managed Security Services Provider (MSSP) strengthen your information security defenses at lower costs while confidentiality, integrity and availability and International regulation compliance intact.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                — 24*7 Monitoring with a dedicated SOC Operation

                            </p>
                            <p className="mb-4 leading-relaxed">
                                — Highly Skilled professional staff with clean security background

                            </p>
                            <p className="mb-4 leading-relaxed">
                                — Global Presence all over the world

                            </p>
                            <p className="mb-8 leading-relaxed">
                                — Compliant with International regulatory standards laws

                            </p>

                            <h1 className="text-2xl mb-5 font-bold">Details</h1>

                            <p className="mb-8 leading-relaxed">
                                DIGINFO Managed Security Services (MSS) Key elements:
                            </p>
                            <p className="mb-8 leading-relaxed">
                                1. <b>Cyber Security Monitoring and Threat Intelligence Services:&nbsp;</b>
                                Deep down 360% visibility of enterprise Infrastructure and Applications and incident response management, Logs and Correlation through Managed SIEM serviceSecurity<br />
                                2. <b>Device Management:&nbsp;</b>
                                Full Operational Activities and Manage Security controls remotely, preemptive security measures.<br />
                                3. <b>Vulnerability Management:&nbsp;</b>
                                Security Assessment and Penetration testing of all IT and Telecom Security and Network devices through our own Threat Assurance Vulnerability Management module<br />
                                4. <b>Web Application Firewall (WAF):&nbsp;</b>
                                Dedicate Web Application Firewall, specialized firewall to protect Internet facing mission critical Web application<br />
                                5. <b>Mobile Device Management (MDM):&nbsp;</b>
                                Mobile Device Management as a managed service at DGCLOUD make sure we take care of all of customer mobile devices and publish mobile application from centralized and secure location, we take care of all updates, fixing all latest threats and vulnerabilities.<br />
                                6. <b>DG Workspace – Work from home:&nbsp;</b>
                                Complete virtual working office through secure VDI solution, best solution for teleworkers and work from home in COVID pandemic, secure and high speed bandwidth for each user.<br />
                                7. <b>DGCLOUD DevOps:&nbsp;</b>
                                Cloud Based Collaborative Software Development environment, DGCLOUD takes care of all Infrastructure servers, storage, applications, Microsoft Azure DevOps for code repository, PreProd and Prod servers for hosting finished ready to market applications.<br />
                                8. <b>SSL VPN as a service:&nbsp;</b>
                                SSL VPN gateway hosting service through DGCLOUD provides hassle free SSL VPN secure access from unsecure public network to all the way customer Data Center.<br />
                                9. <b>IPSec Site to Site VPN as service:&nbsp;</b>
                                IPSec Site to Site VPN hosting service through DGCLOUD provides secure and reliable point to point connectivity for remote branches, partners and subsidiaries to HQ Data Centers
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <Return />
        </div>
    );
}