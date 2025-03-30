import Return from "@/app/components/return";
import Image from "next/image";

export default function DGAcademy() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/DGAcademy/banner.png"
                            alt="DG Academy Background"
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            DG Academy
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="academy logo"
                                src="/DGAcademy/logo.png"
                                width={600}
                                height={300}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="media image"
                                src="/DGAcademy/media.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-[#003366]">
                                HERE IS AN EDUCATIONAL INSTITUTE THAT IS MORE THAN JUST A PLACE OF ACADEMIC VALUE.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Knowledge makes a world of difference. Success depends on it. Those who have realized the fact put a premium on knowledge gathering. DG ACADEMY is the place to fulfill such aspirations.                            </p>
                            <p className="mb-8 leading-relaxed">
                                Students and industry professionals can get first rate information and technological knowhow focused on cyber security. To deliver educational and training material, DG ACADEMY uses real world scenarios and online hands on practice sessions hosted on DIGINFO secure cloud.                            </p>
                            <p className="mb-8 leading-relaxed">
                                The genesis of DG ACADEMY lies in the realization that cyber security professionals must not only possess skills and techniques, they should also be educated to step into leadership and management roles. Our IT programs, together with training and certification in cyber security, provide that need with professional ease                            </p>

                            <a href="https://dgacademy.diginfo.net/" target="_blank" rel="noopener noreferrer">
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