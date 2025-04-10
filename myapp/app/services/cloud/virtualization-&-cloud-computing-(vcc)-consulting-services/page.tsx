import Return from "@/app/components/return";
import Image from "next/image";

export default function VCC() {
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
                        Virtualization and Cloud
                        Computing (VCC) consulting services
                    </h1>
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
                        <p className="mb-8 leading-relaxed">
                            At DIGINFO, Cloud SMEs provide consulting services on Virtualization and Cloud technologies, we believe that a strong virtualization strategy can rapidly deliver efficient and secure cloud environment. We start with cloud enablement program with series of Workshops, Webinars, Knowledgebase and Training on Virtualization and Cloud technologies at client place to have full understand of their business requirement.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            We build modern cloud strategy and roadmap that meets customer business requirement, fixing challenges and issues, starting with Assessment, Design and Plan, Infrastructure and Performance Health check.                                            </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-[#003366]">
                            Details
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Our consulting services have full support from our own product known as DGCLOUD, which is based on world renowned commercial and open source virtualization and cloud technologies and applications, running on our own cutting edge hardware.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our consulting services are as below
                        </p>

                        <ul className="mb-8 leading-relaxed space-y-2">
                            <li>1. Cloud Migration: Full migration of any existing solution at any scale from customer on-premises environment to DGCLOUD Infrastructure.</li>
                            <li>2. Disaster Recovery: Design & Implement Disaster Recovery site for customer, building exact replication of Production site on DGCLOUD Infrastructure as DR Site with DR automation enablement.</li>
                            <li>3. Managed Services: Design, Deploy, Execute, Monitor and Support.</li>
                            <li>4. Security Operation Center (SOC): Full-fledged seamless remote SOC services including Monitoring, Operational and Maintenance services.</li>
                            <li>5. Software Development: Full-fledged software development execution on DGCLOUD Infrastructure where developers write, compile, execute and demonstrate codes on DGCLOUD Infrastructure.</li>
                            <li>6. Hosting Services: Host your Web, Email, Files Repository, ERP, In-House Software, SAAS Applications on DGCLOUD Infrastructure.</li>
                            <li>7. DGCLOUD Workplace: Work from home, complete virtual working office through secure VDI solution.</li>
                            <li>8. DGCLOUD DevOps: Cloud-Based Collaborative Software Development.</li>
                            <li>9. DGCLOUD Sparks: High End servers for dedicated tasks with dedicated computing resources.</li>
                        </ul>

                    </div>
                </div>
            </section>
            <Return/>   
        </div>
    )
}