import Return from "@/app/components/return";
import Image from "next/image";

export default function CompanyOverview() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className="relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/CompanySupport/1.png"
                            alt="Company Review Banner"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Company Overview
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="intro"
                                src="/CompanySupport/2.png"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                Overview
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Ten years ago, DIGINFO was only a dream. A dream to provide unique and innovative solutions for IT and cyber security community. All over the world. Today, DIGINFO has evolved into a multidisciplinary company focused on technology and cyber security.<br></br>
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Most of the world’s businesses are currently facing tough times and stiff competition. Understandably, they are looking for turnkey solutions to tackle the situation. In this scenario, we have devised our own state-of-the art initiatives that cover a wide range of domains.<br></br>

                            </p>
                            <p className="mb-8 leading-relaxed">
                                Our business rests on a number of activities: DG ACADEMY, DG MAGAZINE, DG CLOUD, THREAT ASSURANCE, NATIVE SECURITY, DG LABS, besides SUPPORT & MAINTENANCE. To top it all is our app, DG ENTERPRISE, packed with features to help our customers define, manage, operate and maintain the infrastructure of their businesses.

                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="bg-[#F7F7F7]">
                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="intro"
                                src="/CompanySupport/3.png"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                INTRODUCTION
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                DIGINFO was established in 2011 to serve Pakistan, GCC, Asia, US & European regions by its state-of-the-art software products, which included Threat Assurance, DG Academy, Native Security, DG Magazine, POC as a Service, Consulting and Professional services to execute complex projects with sophisticated solutions and products.                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <div>
                <section className="body-font">
                    <div className="container px-5 py-25 mx-auto">

                        <div className=" flex flex-col items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                THE KIND OF VALUES CRITICAL FOR TOMORROW.
                                AND FOR TODAY.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Our values revolve around entire cyber security
                                methodology to serve the community.
                            </p>
                        </div>

                        <div className="mt-12">
                            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#003366] flex-shrink-0 overflow-hidden">
                                    <div className="relative sm:w-32 sm:h-32 w-20 h-20">
                                        <Image
                                            src="/CompanySupport/10.png" // Replace with your image path
                                            alt="Integrity"
                                            width={138} // Max size for sm breakpoint
                                            height={138}
                                            className="object-cover w-full h-full"
                                            sizes="(max-width: 640px) 80px, 128px"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-[#003366] text-2xl title-font font-medium mb-4">
                                        Integrity
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        Practice of being honest builds strong bonds with
                                        our customers. Bonds that mean consistent and
                                        uncompromising relationship. Bonds that make sure our
                                        clients are in business.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-[#003366] text-2xl title-font font-medium mb-4">
                                        Commitment
                                    </h2>
                                    <p className="leading-relaxed text-base text-gray-900">
                                        DIGINFO is dedicated to ensuring that infrastructure
                                        remains resilient against growing dynamic cyber security
                                        threats.
                                    </p>
                                </div>
                                <div className="sm:w-32 sm:h-32 w-20 h-20 flex-shrink-0 sm:ml-10">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/CompanySupport/11.png"
                                            alt="commitment"
                                            width={128}
                                            height={128}
                                            className="object-contain w-full h-full"
                                            sizes="(max-width: 640px) 80px, 128px"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#003366] flex-shrink-0 overflow-hidden">
                                    <div className="relative sm:w-32 sm:h-32 w-20 h-20">
                                        <Image
                                            src="/CompanySupport/12.png" // Replace with your image path
                                            alt="Competence"
                                            width={138} // Max size for sm breakpoint
                                            height={138}
                                            className="object-cover w-full h-full"
                                            sizes="(max-width: 640px) 80px, 128px"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-[#003366] text-2xl title-font font-medium mb-4">
                                        Competence
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        DIGINFO Research and Development Center ensures
                                        state-of-the-art cyber security initiatives with the help of
                                        our competent team. It establishes and operates a cyber
                                        security competence network to research and innovate.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-[#003366] text-2xl title-font font-medium mb-4">
                                        Passion
                                    </h2>
                                    <p className="leading-relaxed text-base text-gray-900">
                                        Our passion drives us to go beyond industry limitations
                                        to provide unique knowledge, services, and products.
                                    </p>
                                </div>
                                <div className="sm:w-32 sm:h-32 w-20 h-20 flex-shrink-0 sm:ml-10">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/CompanySupport/13.png"
                                            alt="Passion"
                                            width={128}
                                            height={128}
                                            className="object-contain w-full h-full"
                                            sizes="(max-width: 640px) 80px, 128px"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-[#003366] flex-shrink-0 overflow-hidden">
                                    <div className="relative sm:w-32 sm:h-32 w-20 h-20">
                                        <Image
                                            src="/CompanySupport/14.png" // Replace with your image path
                                            alt="creativity"
                                            width={138} // Max size for sm breakpoint
                                            height={138}
                                            className="object-cover w-full h-full"
                                            sizes="(max-width: 640px) 80px, 128px"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-[#003366] text-2xl title-font font-medium mb-4">
                                        Creativity
                                    </h2>
                                    <p className="leading-relaxed text-gray-900">
                                        The threat of cyber security vulnerabilities is stopping
                                        enterprises from embracing artificial intelligence
                                        technologies. DIGINFO aims for a competitive edge with
                                        improved products and team creativity
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                    <h2 className="text-[#003366] text-2xl title-font font-medium mb-4">
                                        Focus
                                    </h2>
                                    <p className="leading-relaxed text-base text-gray-900">
                                    We focus on what’s important in a business and we help
                                    secure it by deep assessment and best solution.
                                    </p>
                                </div>
                                <div className="sm:w-32 sm:h-32 w-20 h-20 flex-shrink-0 sm:ml-10">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/CompanySupport/15.png"
                                            alt="Focus"
                                            width={128}
                                            height={128}
                                            className="object-contain w-full h-full"
                                            sizes="(max-width: 640px) 80px, 128px"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </div>

            <div className="bg-[#F7F7F7]">
                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="mission"
                                src="/CompanySupport/4.jpg"
                                width={600}
                                height={500}
                            />

                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                MISSION
                            </h1>
                            <p className="mb-8 text-[18px] font-semibold leading-relaxed">
                                KNOWING WHO WE ARE IS LIKE
                                KNOWING THE FUTURE
                            </p>
                            <p className="mb-8 leading-relaxed">
                                Our focus is to build trust with our customers in various government and private sectors. Having decades of experience in Digital IT and Cyber Security, we bringtrust to an increasingly connected world. Our in depth know-how helps authenticate identities and protect data so they stay safe and enable services in personal devices, connected objects, the cloud and everything in between.
                                Our IT and Cyber Security solutions are at the heart of modern life—from payments to enterprise security and the internet of things—enabling our clients to deliver secure digital services for countless individuals.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Return/>
        </div>
    );
}