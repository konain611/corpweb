import Image from 'next/image';
import { ArrowBigRightDash } from 'lucide-react';

export default function Media() {
    return (
        <div className="w-full px-4 sm:px-6 lg:px-32 py-8 sm:py-10 md:py-12 bg-[#FF9102]">
            <div className="container mx-auto">
                {/* Headings */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <h2 className="text-[#003366] text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                        MEDIA
                    </h2>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white leading-tight sm:leading-snug">
                        LET US STAND AGAINST YOUR SECURITY THREATS
                    </h1>
                    <p className="text-base sm:text-lg text-white max-w-3xl">
                        We can help you to assist your security threats, whatever the challenge.
                    </p>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 [&>*]:transition-transform [&>*]:duration-300 [&>*]:hover:scale-[1.03]">
                    {[
                        {
                            url: "https://dgmagazine.net/from-the-desk-of-ciso/",
                            image: "/Media/CISO.jpeg",
                            title: "FROM THE DESK OF CISO"
                        },
                        {
                            url: "https://dgmagazine.net/research/why-is-cyber-security-governance-failing/",
                            image: "/Media/GOVERNANCE.jpg",
                            title: "WHY IS CYBER SECURITY GOVERNANCE FAILING?"
                        },
                        {
                            url: "https://dgmagazine.net/research/without-smart-security-smart-homes-aremerely-jails/",
                            image: "/Media/SECURE_HOMES.jpg",
                            title: "WITHOUT SMART SECURITY, SMART HOMES ARE MERELY JAILS."
                        },
                        {
                            url: "https://dgmagazine.net/research/is-it-no-social-media-no-life-or-no-social-media-real-life/",
                            image: "/Media/SOCIAL_MEDIA.jpg",
                            title: 'IS IT "NO SOCIAL MEDIA = NO LIFE" OR "NO SOCIAL MEDIA = REAL LIFE"?'
                        }
                    ].map((item, index) => (
                        <a 
                            key={index}
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block group"
                            aria-label={`Read more about ${item.title}`}
                        >
                            <div className="bg-[#003366] p-4 sm:p-5 md:p-6 rounded-lg text-center text-white font-semibold flex flex-col h-full">
                                <div className="flex-1 mb-3 sm:mb-4">
                                    <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                                        <Image
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            src={item.image}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            quality={90}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-between">
                                    <p className="mb-3 text-sm sm:text-base md:text-[15px] lg:text-base">
                                        {item.title}
                                    </p>
                                    <div className='flex justify-center items-center'>
                                        <ArrowBigRightDash 
                                            size={32} 
                                            className="text-white group-hover:translate-x-1 transition-transform" 
                                            strokeWidth={2.5} 
                                            absoluteStrokeWidth 
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}