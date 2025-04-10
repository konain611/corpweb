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
                        Cloud Migration Server
                    </h1>
                </div>
            </section>


            <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt="cm image"
                            src="/Cloud/cm.png"
                            width={1200}
                            height={1400}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p className="mb-8 leading-relaxed">
                            Cloud plays a vital role in digital transformation and Disaster recovery initiatives. Choosing the right cloud strategy with experienced cloud providers seamlessly transform your journey from legacy to cloud.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            At DIGINFO our SMEs using our own product DGCLOUD will make it happen with starting from Assessment, Design and Execution of applications to be migrated, data to be migrated, advanced disaster recovery to fully fledge running services on cloud.
                        </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-[#003366]">
                            Details
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Our consulting services have full support from our own product known as DGCLOUD, which is based on world renowned commercial and open source virtualization and cloud technologies and applications, running on our own cutting edge hardware. Our cloud migration Services can advise on the best migration approach for your enterprise, from any environment to any cloud.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our comprehensive business continuity and disaster recovery plans are fully tested and validated, ensuring that migration has been successful.
                        </p>
                        <p className="mb-8 leading-relaxed">
                            Our consulting services are as below
                        </p>

                        <ul className="mb-8 leading-relaxed space-y-2">
                            <li>1. Cloud Migration : Full migration of any existing applications at any scale from customer on premises environment to customer DR site or this could be DGCLOUD Infrastructure.</li>
                            <li>2. Disaster Recovery : Design & Implement Disaster Recovery site for customer, Building exact replication of Production site on DGCLOUD Infrastructure as DR Site with DR automation enablement.</li>
                        </ul>

                    </div>
                </div>
            </section>
            <Return />
        </div>
    )
}