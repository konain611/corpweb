import Return from "@/app/components/return";
import Image from "next/image";

export default function DGKids() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/DGAcademy/banner.png"
                            alt="DG kids Background"
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            DG Kids
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded"
                                alt="media image"
                                src="/DGKids/media.png"
                                width={1000}
                                height={1100}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-[#003366]">
                                DG Cyber KIDS
                            </h1>
                            <h1 className="title-font sm:text-2xl text-3xl mb-8 font-medium text-[#003366]">
                                Empower every child with
                                Cyber Security Complexity
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                The new scenario, resulting from the pandemic involving work from home and study online has only exacerbated the already increasing incidences of cyber threats. DG Cyber Kids, a product of DIGINFO, provides resources for parents and teachers to educate children as they grow up in a world teeming with technological advancement. The initlative equips children with a sense of cyber safety and ethics. In the process, kids lean more about current terms that have become common like internet safety, bully response, technology balance, digital reputation and privacy.                            </p>
                            <p className="mb-8 leading-relaxed">
                                We are relentless in our mission to improve security-not just for our customers, but for the entire community. Forgoing the way information security has been done in the name of better outcomes for all. DG ACADEMY uses Practical ways of educating the basics of cybersecurity to children.                            </p>

                     
                                <button className="border-[#003366] mt-10 border-2 px-6 py-3 cursor-pointer hover:bg-[#003366] hover:text-white transition-transform transform hover:scale-105 duration-200">
                                    Visit Us
                                </button>
                          

                        </div>


                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}