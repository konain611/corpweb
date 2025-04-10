import Return from "@/app/components/return";
import Image from "next/image";

export default function DGMagazine() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className=" relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/DGMagazine/banner.png"
                            alt="DG Magazine Background"
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                            className="absolute inset-0"
                        />
                    </div>


                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            DG Magazine
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="Magazine logo"
                                src="/DGMagazine/logo.png"
                                width={500}
                                height={250}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="media image"
                                src="/DGMagazine/media.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-[#003366]">
                                A TREASURE TROVE OF KNOWLEDGE THAT TRANSLATES INTO PROFITS FOR YOUR BUSINESS.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                DGMAGAZINE is a great source of information for the cyber security community. The monthly journal is full of content that is current and topical. Yet it is of permanent value.                             </p>
                            <p className="mb-8 leading-relaxed">
                                We publish original material aimed towards providing solutions and solving problems, as well as exposing and explaining raging issues facing the cyber security community today. It is a key source of knowledge, news and awareness of cyber security world.                            </p>

                            <a href="https://dgmagazine.net/" target="_blank" rel="noopener noreferrer">
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