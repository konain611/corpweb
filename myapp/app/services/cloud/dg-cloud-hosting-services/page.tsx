import Return from "@/app/components/return";
import Image from "next/image";
import Link from "next/link";

export default function DGCloud() {
    return (
        <div className="bg-white">
            <section className="relative min-h-[300px] flex items-center">
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
                        DG CLOUD HOSTING SERVICES
                    </h1>
                </div>
            </section>

            <section className="container px-5 py-5 mx-auto mt-10 ">
                <div className=" flex flex-col items-center text-center ">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                        Introduction
                    </h1>
                    <p className="mb-8 leading-relaxed text-gray-800">
                        DIGINFO is offering its own secure cloud services known as DGCLOUD where you can host any Web, Applications, Database and Files Repositories. DGCLOUD is a secure and feature-rich platform built on cutting edge computing, storage, cloud and virtualization technologies. DGCLOUD Orchestrator portal provides secure and easy to use management console to build, manage, and deploy your applications rapidly. You can define your requirements and make your own cloud application or Infrastructure at the speed of change.
                    </p>
                    <div className="bg-[#F7F7F7]">
                        <div className="flex flex-col md:flex-row gap-8 my-6 ">

                            <div className="md:w-1/2">
                                <h1 className="title-font sm:text-4xl text-3xl my-4 font-medium text-[#003366]">
                                    Details
                                </h1>
                                <p className="mb-8 leading-relaxed text-gray-800">
                                    You can host your Web, Application, Databases, Email, Files Repository, ERP,
                                    In-House Software, SAAS Applications on our DGCLOUD Infrastructure at competitive price.
                                    DGCLOUD is fully protected by advance security controls where very highly skilled
                                    professional staff take care all security challenges to make ensure your business is
                                    robust, secure and highly available on our platform.
                                </p>
                            </div>


                            <div className="md:w-1/2">
                                <h1 className="title-font sm:text-4xl text-3xl my-4 font-medium text-[#003366]">
                                    Key Elements
                                </h1>
                                <ul className="mb-8 leading-relaxed space-y-2 text-left text-gray-800">
                                    <li>1. 24/7 Chat & Ticket Support.</li>
                                    <li>2. Built-in Director services and Active Directory.</li>
                                    <li>3. Secure DNS services.</li>
                                    <li>4. Single Sign On and Multifactor Authentication Support.</li>
                                    <li>5. Identify and Access Management Support.</li>
                                    <li>6. Managed risk with advance security controls.</li>
                                    <li>7. Multi Layered Infrastructure.</li>
                                    <li>8. Threat Intelligence with Intelligent monitoring and control.</li>
                                    <li>9. Privacy and transparency.</li>
                                    <li>10. Hybrid and multi-cloud Options.</li>
                                    <li>11. Easy SSL Installation & Auto Renewal.</li>
                                    <li>12. Application and Data Backup Support.</li>
                                    <li>13. Full end to end Encryption.</li>
                                    <li>14. Free Cloud technology consulting and guidance for your application.</li>
                                    <li>15. Free migration services from on-premises to DGCLOUD Infrastructure.</li>
                                    <li>16. Option to manage your application by DIGINFO team on your behalf.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt="poc image"
                            src="/Assesment/POC.png"
                            width={1200}
                            height={1200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-[#003366]">
                            POC as a Service
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Evaluating a best Cyber product needs lots of time, efforts and existing infrastructure, not every customer can afford such a ready Infrastructure with all available components.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            DGLABS provides secure and robust online cloud orchestrator with full-fledge workspace with all POC infrastructure along with other devices fully configured and running.
                        </p>
                        <Link href="/services/assesment/poc-as-a-service">
                            <button className="border-[#003366] mt-10 border-2 px-6 py-3 cursor-pointer hover:bg-[#003366] hover:text-white transition-transform transform hover:scale-105 duration-200">
                                Learn More ➡
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt="vcc image"
                            src="/Cloud/vcc.png"
                            width={1200}
                            height={1200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-[#003366]">
                            Virtualization and Cloud Computing consulting services
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Virtualization and Cloud journey starts with DG SMEs consulting services, we believe that a strong virtualization strategy can rapidly deliver efficient and secure cloud environment.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            We build modern cloud strategy that meets customer business requirement, fixing challenges and issues, starting with Assessment, Design and Plan, Infrastructure and Performance Health check.
                        </p>
                        <Link href="/services/cloud/virtualization-&-cloud-computing-(vcc)-consulting-services">
                            <button className="border-[#003366] mt-10 border-2 px-6 py-3 cursor-pointer hover:bg-[#003366] hover:text-white transition-transform transform hover:scale-105 duration-200">
                                Learn More ➡
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt="vcc image"
                            src="/Cloud/cm.png"
                            width={1200}
                            height={1200}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-[#003366]">
                            Cloud Migration Services
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Technology has changed the way businesses operate and grow. Businesses can grow if they run smoothly or they can slide to bankruptcy in the wake of lapses. It is a paradox that technology works both ways: businesses can make millions or lose millions. That’s why, owners and board of directors have realized
                            the importance of CS and have given a larger role for the sake of smooth and unhindered operations.                                                </p>
                        <p className="mb-8 leading-relaxed">
                            As a result, our clients get a modern cloud strategy and roadmap that meets their needs.
                        </p>
                        <Link href="/services/cloud/cloud-migration-services">
                            <button className="border-[#003366] mt-10 border-2 px-6 py-3 cursor-pointer hover:bg-[#003366] hover:text-white transition-transform transform hover:scale-105 duration-200">
                                Learn More ➡
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <Return/>
        </div>
    )
}