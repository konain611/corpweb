import Image from 'next/image';
import Link from 'next/link';
import {ArrowBigRightDash} from 'lucide-react';


export default function Solution() {
    return (
        <div className="w-full md:px-32 py-12 bg-[#003366]">
            <div className="container mx-auto py-2 px-4 ">
                <h2 className="text-[#F69226] text-3xl font-bold mb-7 text-left md:text-left">
                    SOLUTION
                </h2>
                <h1 className="text-4xl font-bold mb-4 text-white">
                    LET US STAND AGAINST YOUR SECURITY THREATS
                </h1>
                <p className="text-lg mb-12 text-white">
                    We can help you to assist your security threats, whatever the challenge.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 [&>*]:transition-transform [&>*]:duration-300 [&>*]:hover:scale-105">
                    <a href="https://dgmagazine.net/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#FF9102] p-6 rounded-lg text-center text-white font-semibold h-full flex flex-col">
                            <Image
                                alt="Shield icon representing DG Magazine"
                                width={100}
                                height={100}
                                className="mx-auto mb-4"
                                src="/Solution/dgMagazineLogo.png"
                            />
                            <p className="mb-4 flex-grow">
                                DG Magazine ultimate source of Cyber security latest content and
                                resources
                            </p>
                            <div className='flex justify-center items-center mt-auto'>
                                <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                            </div>
                        </div>
                    </a>
                    <a href="https://dgacademy.diginfo.net/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#FF9102] p-6 rounded-lg text-center text-white font-semibold h-full flex flex-col">
                            <Image
                                alt="Graduation cap icon representing leadership in IT"
                                width={100}
                                height={100}
                                className="mx-auto mb-4"
                                src="/Solution/dgAcademyLogo.png"
                            />
                            <p className="mb-4 mt-7 flex-grow">
                                Leadership in IT, Telcom and Cybersecurity profession gives us an edge
                                in academics.
                            </p>
                            <div className='flex justify-center items-center mt-auto'>
                                <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                            </div>
                        </div>
                    </a>
                    <Link href="/products/security-challenge/threat-assurance">
                        <div className="bg-[#FF9102] p-6 rounded-lg text-center text-white font-semibold h-full flex flex-col">
                            <Image
                                alt="Shield with exclamation mark icon representing Threat Assurance"
                                width={80}
                                height={80}
                                className="mx-auto mb-4"
                                src="/Solution/threatAssuranceLogo.png"/>
                            <p className="mb-4 flex-grow">
                                Threat Assurance is a suite of modules covers an entire business and
                                operational sectors.
                            </p>
                            <div className='flex justify-center items-center mt-auto'>
                                <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                            </div>
                        </div>
                    </Link>
                    <a href="https://dgcloud.diginfo.net/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#FF9102] p-6 rounded-lg text-center text-white font-semibold h-full flex flex-col">
                            <Image
                                alt="Cloud with lock icon representing DG CLOUD"
                                width={100}
                                height={100}
                                className="mx-auto mb-4"
                                src="/Solution/dgCloudLogo.png"
                            />
                            <p className="mb-4 mt-6 flex-grow">
                                DG CLOUD is secure and feature-rich platform built on cutting edge cloud
                                and virtualization technologies.
                            </p>
                            <div className='flex justify-center items-center mt-auto'>
                                <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}