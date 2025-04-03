import Return from "@/app/components/return";
import Image from "next/image";

export default function GRC2() {
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
                            GRC Consulting and
                            Implementation services
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
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                WE CAN ASSURE YOUR THREAT!
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                At ThreatAssurence, Team of Subject Matter expert with years of proven experience provide consulting and professional services. Starting with meeting, interviewing and assessing existing processes, documentations, configuration files, HLD\LLD diagrams and HR hierarchy. Finally designing, implementing and improving solutions.                            </p>
                        </div>

                    </div>
                </section>

            </div>
            <div className="bg-[#F7F7F7]">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Red Team */}
                        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-t-4 hover:border-red-600">
                            <h3 className="text-2xl font-bold text-red-600 mb-4">RED TEAM</h3>
                            <p className="text-gray-700">
                                The objective of Red team is to exploit, compromise, and circumvent Customer Infrastructure and application.
                                Red team operations begins with some or no knowledge of customer environment.
                                Offers full fledged cyber-attacks, social engineering, and physical security in testing threat profiles.
                            </p>
                        </div>

                        {/* Blue Team */}
                        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-t-4 hover:border-blue-600">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">BLUE TEAM</h3>
                            <p className="text-gray-700">
                                The objective of Blue team is to detect and prevent security controls.
                                Blue team operation starts with analysis of infrastructure and application to ensure security,
                                identify security flaws, verify the effectiveness of each security measure,
                                and to make sure all security measures will continue to be effective after implementation.
                            </p>
                        </div>

                        {/* Green Team */}
                        <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-t-4 hover:border-green-600">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">GREEN TEAM</h3>
                            <p className="text-gray-700">
                                The objective of Green team is to verify and acknowledge Risks findings.
                                Green team operation starts with verifying and acknowledging findings on detailed security assessment and analysis reports.
                                The main challenge of Green team is to fix all findings till re-assessment shows zero findings or information owner accept the RISK.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Return />
        </div>
    );
}