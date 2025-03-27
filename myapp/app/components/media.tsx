import Image from 'next/image';
import { ArrowBigRightDash } from 'lucide-react';

export default function Media() {
    return (
        <div className="w-full md:px-32 py-12 bg-[#FF9102]">
            <div className="container mx-auto py-2 ">
                <h2 className="text-[#003366] text-3xl font-bold mb-7 text-left md:text-left">
                    MEDIA
                </h2>
                <h1 className="text-4xl font-bold mb-4 text-white">
                    LET US STAND AGAINST YOUR SECURITY THREATS
                </h1>
                <p className="text-lg mb-12 text-white">
                    We can help you to assist your security threats, whatever the challenge.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 [&>*]:transition-transform [&>*]:duration-300 [&>*]:hover:scale-105">
                    <a href="https://dgmagazine.net/from-the-desk-of-ciso/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#003366] p-6 rounded-lg text-center text-white font-semibold flex flex-col h-full">
                            <div className="flex-1">
                                <Image
                                    alt="Shield icon representing DG Magazine"
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    src="/Media/CISO.jpeg"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <p className="mb-4">
                                    FROM THE DESK OF CISO
                                </p>
                                <div className='flex justify-center items-center'>
                                    <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://dgmagazine.net/research/why-is-cyber-security-governance-failing/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#003366] p-6 rounded-lg text-center text-white font-semibold flex flex-col h-full">
                            <div className="flex-1">
                                <Image
                                    alt="Graduation cap icon representing leadership in IT"
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    src="/Media/GOVERNANCE.jpg"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <p className="mb-4">
                                    WHY IS CYBER SECURITY GOVERNANCE FAILING?
                                </p>
                                <div className='flex justify-center items-center'>
                                    <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://dgmagazine.net/research/without-smart-security-smart-homes-aremerely-jails/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#003366] p-6 rounded-lg text-center text-white font-semibold flex flex-col h-full">
                            <div className="flex-1">
                                <Image
                                    alt="Shield with exclamation mark icon representing Threat Assurance"
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    src="/Media/SECURE_HOMES.jpg"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <p className="mb-4">
                                    WITHOUT SMART SECURITY, SMART HOMES ARE MERELY JAILS.
                                </p>
                                <div className='flex justify-center items-center'>
                                    <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://dgmagazine.net/research/is-it-no-social-media-no-life-or-no-social-media-real-life/" target="_blank" rel="noopener noreferrer" className="block">
                        <div className="bg-[#003366] p-6 rounded-lg text-center text-white font-semibold flex flex-col h-full">
                            <div className="flex-1">
                                <Image
                                    alt="Cloud with lock icon representing DG CLOUD"
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                    src="/Media/SOCIAL_MEDIA.jpg"
                                />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <p className="mb-2">
                                    IS IT &quot;NO SOCIAL MEDIA = NO LIFE&quot; OR &quot;NO SOCIAL MEDIA = REAL LIFE&quot;?
                                </p>

                                <div className='flex justify-center items-center'>
                                    <ArrowBigRightDash size={42} color="#ffffff" strokeWidth={2.5} absoluteStrokeWidth />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}