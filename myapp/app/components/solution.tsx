import Image from 'next/image';
import Link from 'next/link';
import { ArrowBigRightDash } from 'lucide-react';

export default function Solution() {
    const solutions = [
        {
            type: 'external',
            url: "https://dgmagazine.net/",
            image: "/Solution/dgMagazineLogo.png",
            alt: "DG Magazine logo",
            width: 100,
            height: 100,
            text: "DG Magazine ultimate source of Cyber security latest content and resources",
            mt: false
        },
        {
            type: 'external',
            url: "https://dgacademy.diginfo.net/",
            image: "/Solution/dgAcademyLogo.png",
            alt: "DG Academy logo",
            width: 100,
            height: 100,
            text: "Leadership in IT, Telcom and Cybersecurity profession gives us an edge in academics.",
            mt: true
        },
        {
            type: 'internal',
            url: "/products/security-challenge/threat-assurance",
            image: "/Solution/threatAssuranceLogo.png",
            alt: "Threat Assurance logo",
            width: 80,
            height: 80,
            text: "Threat Assurance is a suite of modules covers an entire business and operational sectors.",
            mt: false
        },
        {
            type: 'external',
            url: "https://dgcloud.diginfo.net/",
            image: "/Solution/dgCloudLogo.png",
            alt: "DG Cloud logo",
            width: 100,
            height: 100,
            text: "DG CLOUD is secure and feature-rich platform built on cutting edge cloud and virtualization technologies.",
            mt: true
        }
    ];

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-10 md:py-12 bg-[#003366]">
            <div className="container mx-auto max-w-7xl">
                {/* Headings */}
                <div className="mb-8 md:mb-12 px-2 sm:px-0">
                    <h2 className="text-[#F69226] text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        SOLUTION
                    </h2>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white leading-tight sm:leading-snug">
                        LET US STAND AGAINST YOUR SECURITY THREATS
                    </h1>
                    <p className="text-base sm:text-lg text-white max-w-3xl">
                        We can help you to assist your security threats, whatever the challenge.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {solutions.map((solution, index) => (
                        solution.type === 'external' ? (
                            <a 
                                key={index}
                                href={solution.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="block group transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]"
                                aria-label={`Visit ${solution.alt.replace(' logo', '')}`}
                            >
                                <div className="bg-[#FF9102] p-4 sm:p-5 md:p-6 rounded-lg text-center text-white font-semibold h-full flex flex-col">
                                    <div className={`mx-auto mb-3 sm:mb-4 ${solution.mt ? 'mt-2 sm:mt-3' : ''}`}>
                                        <Image
                                            alt={solution.alt}
                                            width={solution.width}
                                            height={solution.height}
                                            src={solution.image}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mb-3 sm:mb-4 flex-grow text-sm sm:text-base">
                                        {solution.text}
                                    </p>
                                    <div className='flex justify-center items-center mt-auto'>
                                        <ArrowBigRightDash 
                                            size={32} 
                                            className="text-white group-hover:translate-x-1 transition-transform" 
                                            strokeWidth={2} 
                                        />
                                    </div>
                                </div>
                            </a>
                        ) : (
                            <Link 
                                key={index}
                                href={solution.url}
                                className="block group transition-transform duration-300 hover:scale-[1.03] focus:scale-[1.03]"
                                aria-label={`Learn more about ${solution.alt.replace(' logo', '')}`}
                            >
                                <div className="bg-[#FF9102] p-4 sm:p-5 md:p-6 rounded-lg text-center text-white font-semibold h-full flex flex-col">
                                    <div className={`mx-auto mb-3 sm:mb-4 ${solution.mt ? 'mt-2 sm:mt-3' : ''}`}>
                                        <Image
                                            alt={solution.alt}
                                            width={solution.width}
                                            height={solution.height}
                                            src={solution.image}
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mb-3 sm:mb-4 flex-grow text-sm sm:text-base">
                                        {solution.text}
                                    </p>
                                    <div className='flex justify-center items-center mt-auto'>
                                        <ArrowBigRightDash 
                                            size={32} 
                                            className="text-white group-hover:translate-x-1 transition-transform" 
                                            strokeWidth={2} 
                                        />
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}