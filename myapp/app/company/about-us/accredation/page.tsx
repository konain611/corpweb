import Return from "@/app/components/return";
import Image from "next/image";

export default function Accredation() {

    const logos = [
        { id: 'hp', src: '/Accredation/hp.png', alt: 'HP' },
        { id: 'ibm', src: '/Accredation/ibm.png', alt: 'ibm' },
        { id: 'cisco', src: '/Accredation/cisco.png', alt: 'cisco' },
        { id: 'rapid1', src: '/Accredation/rapid1.png', alt: 'rapid1' },
        { id: 'dell', src: '/Accredation/dell.png', alt: 'dell' },
        { id: 'vmware', src: '/Accredation/vmware.png', alt: 'vmware' },
        { id: 'fortinet', src: '/Accredation/fortinet.png', alt: 'fortinet' },
        { id: 'microfocus', src: '/Accredation/microfocus.png', alt: 'microfocus' },
        { id: 'ms', src: '/Accredation/ms.png', alt: 'ms' },
        { id: 'paloalto', src: '/Accredation/paloalto.png', alt: 'paloalto' },
        { id: 'qualys', src: '/Accredation/qualys.jpg', alt: 'qualys' },
        { id: 'redhat', src: '/Accredation/redhat.png', alt: 'redhat' },
        { id: 'sophos', src: '/Accredation/sophos.png', alt: 'sophos' },
        { id: 'symantac', src: '/Accredation/symantac.png', alt: 'symantac' },
        { id: 'huawei', src: '/Accredation/huawei.png', alt: 'huawei' },
        { id: 'veeam', src: '/Accredation/veeam.png', alt: 'veeam' },
        { id: 'pasha', src: '/Accredation/pasha.png', alt: 'pasha' },
    ];

    return (
        <div>
            <section className="mt-10 relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/CompanySupport/1.png"
                        alt="Accredation Banner"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Acredation
                    </h1>
                </div>
            </section>

            <section className="container px-5 py-5 mx-auto mt-10">
                <div className=" flex flex-col items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                        WITH PARTNERS LIKE THESE, YOU ARE
                        BOUND TOGET SERVICE ON A DIFFERENT LEVEL.
                    </h1>
                </div>
            </section>

            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
                    {logos.map((logo) => (
                        <div
                            key={logo.id}
                            className="flex items-center justify-center h-25 p-4 shadow-md 
                  transition-transform duration-300 ease-in-out 
                  hover:-translate-y-1 hover:shadow-lg"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={60}
                                className="object-contain max-h-16"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Return />
        </div>
    )
}