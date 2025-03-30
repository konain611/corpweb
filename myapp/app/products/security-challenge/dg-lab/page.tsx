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
                            alt="DG Lab BG"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            DG Labs
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="dglab-logo"
                                src="/DGLab/dglab.png"
                                width={600}
                                height={300}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="binarysearch"
                                src="/DGLab/1010.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-[#003366]">
                                SOME RESEARCH AND DEVELOPMENT GOES A LONG WAY IN IRONING OUT THE TOUCHY AREAS.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                DGLABS is an initiative by DIGINFO to be an independent
                                cyber security research and development facility, where
                                we thoroughly evaluate cyber security technologies and
                                products
                            </p>

                            <p className="mb-8 leading-relaxed">
                                We built our own framework and methodology based
                                on real world scenarios, with several case studies fully
                                representing and covering almost all kinds of customers
                                worldwide.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                DGLABS is powered by DGCLOUD’s secure and feature rich platform built on computing, storage, cloud and
                                virtualization technologies.
                            </p>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                DGLABS has 3 core components.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                1. Best Cyber Security Product <br></br>
                                2. Buyer’s Guide<br></br>
                                3. POC as a Service<br></br>
                            </p>
                            <p className="mb-8 leading-relaxed">
                                To complement these we have DG LABS Orchestrator, a
                                self-service portal. The automated tools featured in the
                                portal help manage POC infrastructure.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}