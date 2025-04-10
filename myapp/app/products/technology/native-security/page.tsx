import Return from "@/app/components/return";
import Image from "next/image";

export default function NativeSecurity() {
    return (
        <div className="bg-white">
            <div className="bg-white">
                <section className="relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/NativeSecurity/banner.png"
                            alt="Native Security Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Native Security
                        </h1>
                    </div>
                </section>

                <section className="text-gray-900 body-font">
                    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <Image
                                className="object-cover object-center rounded mb-24"
                                alt="native logo"
                                src="/NativeSecurity/logo.png"
                                width={600}
                                height={300}
                            />

                            <Image
                                className="object-cover object-center rounded"
                                alt="media image"
                                src="/NativeSecurity/media.png"
                                width={1200}
                                height={1400}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                                WHEN YOU RELY ON OUR PRODUCTS, YOU GET ENDURING VALUE.
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                Native Security is a secure computing semiconductor chip initiative under DIGINFO umbrella, based on the RISC-V instruction set architecture. We design, manufacture and develop hardware which are used in servers, workstations, laptops, mobile devices, military and defense systems, SCADA system and embedded system applications.
                            </p>
                            <p className="mb-8 leading-relaxed">
                                To run the hardware, we wrote our own secure operating system. Native Security manufactures and supplies a number of products which are durable, dependable and economical. Your business will be on smooth ground with our products on board.                            </p>
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                            Native Security Products
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                1. Microprocessors <br></br>
                                2. Microcontrollers <br></br>
                                3. Motherboard<br></br>
                                4. IOT System<br></br>
                                5. Drones<br></br>
                                6. Robotics<br></br>
                                7. Embedded processors<br></br>
                                8. Flash Memory<br></br>
                                9. Storage Drives<br></br>
                                10. Storage controllers<br></br>
                                11. Routing Devices<br></br>
                                12. Switching Devices<br></br>
                                13. Wireless Access Points<br></br>
                                14. Wireless Controllers<br></br>
                                15. Special purpose Military Hardware<br></br>
                                16. Secure Operating Systems.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <Return />
        </div>
    );
}