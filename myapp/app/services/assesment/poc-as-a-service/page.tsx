import Return from "@/app/components/return";
import Image from "next/image";

export default function POC() {

    const clientCategories = [
        {
            title: 'Service Management',
            clients: [
                'Security Configuration',
                'Integration',
                'Asset Management',
                'Change Management',
                'Backup and Restore',
                'Support',
                'MTC – NESCOM',
                'Version and Patch Management'
            ]
        },
        {
            title: 'Use Case Scenarios',
            clients: [
                'Technical Capabilities',
                'Confidentiality and Integrity Validations',
                'High Availability Checks',
                'Datasheet Claims',
                'Ease of Configuration',
                'Ease of Integration',
                'Performance Claims',
                'GUI and CLI End User Experience',
                'Community Feedback'
            ]
        },
        {
            title: 'Operation Management',
            clients: [
                'Security Operation',
                'Service Mapping',
                'Orchestration',
                'Log and Event Management',
                'Backup and Restore',
                'Discovery'
            ]
        },
        {
            title: 'Business Management',
            clients: [
                'Audit and Compliance'
            ]
        }
    ]

    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className=" relative min-h-[300px] flex items-center">
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
                            POC as a service
                        </h1>
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
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed">
                                Evaluating a best Cyber product needs lots of time, efforts and existing infrastructure, not every customer can afford such as ready Infrastructure with all available components.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                POC as a service is executed through DGLABS platform which is powered by DGCLOUD&apos;s secure and feature-rich platform built on cutting edge computing, storage, cloud and virtualization technologies.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                All use cases are available either pre-configured for a fast execution or customer can choose his own use case to configure from zero.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Customer just needs to define requirement by choosing available and custom scenarios and whole infrastructure is created on fly.                            </p>
                        </div>
                    </div>
                </section>
                
                <section className="container px-5 py-5 mx-auto mt-10 ">
                    <div className=" flex flex-col items-center text-center ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                            Details
                        </h1>
                        <p className="mb-8 leading-relaxed text-gray-800">
                            We built our own framework and methodology based on real world complex scenarios, with several case studies fully representing and covering almost all kind of customers worldwide. We built use cases considering looking at each and every aspects of a product from People, Process and Technology prospective, covering strong and week areas of products, customer can record evidence of products responses against each use case scenario.
                        </p>
                        
                    </div>
                </section>

                <section className="py-12 bg-[#F7F7F7]">
                    <div className="container mx-auto px-4">
                    <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-center  text-[#003366]">
                            DGLABS Product Evaluation
                            Methodologies
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 px-10">
                            {clientCategories.map((category, index) => (
                                <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <h3 className="text-lg font-semibold text-[#003366] mb-3 border-b pb-2">{category.title}</h3>
                                    <ul className="space-y-2">
                                        {category.clients.map((client, i) => (
                                            <li key={i} className="text-gray-700 text-sm hover:text-[#003366] transition-colors">
                                                {client}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <Return />
        </div>
    );
}