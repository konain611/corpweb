import Return from "@/app/components/return";
import Image from "next/image";

export default function DGCloud() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/DGCloud/banner.png"
                            alt="DG Cloud Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            DG Cloud
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="native logo"
                                src="/DGCloud/logo.png"
                                width={600}
                                height={300}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="media image"
                                src="/DGCloud/media.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-[#003366]">
                                WITH CLOUD TECHNOLOGY, YOUR PERFORMANCE AND BUSINESS CAN REACH THE SKIES.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                How many times did you wish you had a facility to  access your data from any place you like? From home, from office, from anywhere. DG CLOUD is exactly that facility offering a secure and feature-rich platform built on cutting edge cloud and virtualization technologies. With it, you can define your requirements and make your own cloud infrastructure at lightning speed.                            </p>
                            <p className="mb-8 leading-relaxed">
                                DG CLOUD is more than what meets the eye. You can perform a number of tasks with easy accessibility. And you never have the fear of losing anything in an hour of need. A number of products and solutions allow you to perform multiple tasks without much ado. Our product range includes DG CLOUD WorkPlace, DG CLOUD DevOps, DG CLOUD Sparks, DG CLOUD DR, DG CLOUD Hosting.                            </p>
                            <p className="mb-8 leading-relaxed">
                                On the Solutions menu we have Cloud Migration, Disaster Recovery, Managed Services, Security Operation Center (SOC), Software Development, Hosting Services. The Cloud Enablement feature offers Workshops, Webinars, Knowledgebase and Training on Virtualization and Cloud technologies. And to make things still easier, we have DG CLOUD Orchestrator portal which provides secure and easy-to-use management console to build, manage, and deploy your applications rapidly. With facilities like these, your business will take a flying start.                            </p>

                            <a href="https://dgcloud.diginfo.net/" target="_blank" rel="noopener noreferrer">
                                <button className="border-[#003366] mt-10 border-2 px-6 py-3 cursor-pointer hover:bg-[#003366] hover:text-white transition-transform transform hover:scale-105 duration-200">
                                    Visit Us
                                </button>
                            </a>

                        </div>


                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}