import Return from "@/app/components/return";
import Image from "next/image";

export default function DGMedia() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/DGMagazine/banner.png"
                            alt="DG Media Background"
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                            className="absolute inset-0"
                        />
                    </div>


                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            DG Media
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="Media logo"
                                src="/DGMedia/logo.png"
                                width={500}
                                height={200}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="media image"
                                src="/DGMedia/media.png"
                                width={1200}
                                height={800}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-8 font-medium text-[#003366]">
                                DIGINFO Stream1 Corporate Website Structure
                            </h1>
                            <h1 className="title-font sm:text-2xl text-3xl mb-8 font-medium text-[#003366]">
                                Media
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                The world of Cybersecurity is evolving at the speed of change, every second and hour individuals, business entities, and governments are impacted by cybercriminals.
                                DIGINFO soon launching a DG MEDIA channel having a source of cyber information including a PODCAST is a twice week information on cyber security, interactive audio and video program where our Cyber guru talks about recent cyber security attacks, breaches, malware infections, knowledge sessions, and new cyber technologies.                             </p>

                        </div>


                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}