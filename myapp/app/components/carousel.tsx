"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function BannerCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 1,
            image: "/Carousel/C1.png",
            title: "Cyber Security Solutions",
            description: "Protecting your digital assets with cutting-edge security measures"
        },
        {
            id: 2,
            image: "/Carousel/C2.png", 
            title: "Advanced Threat Protection", 
            description: "Stay ahead of cyber threats with our proactive security approach"
        },
        {
            id: 3,
            image: "/Carousel/C3.png",
            title: "Enterprise Security",
            description: "Comprehensive security solutions for businesses of all sizes"
        },
        // {
        //     id: 4,
        //     image: "/Carousel/C4.png", // Make sure these image files exist in the public/images folder
        //     title: "24/7 Monitoring",
        //     description: "Round-the-clock surveillance and immediate threat response"
        // }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(current => (current + 1) % slides.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    const handlePrevious = () => {
        setActiveIndex(current => (current - 1 + slides.length) % slides.length);
    };

    const handleNext = () => {
        setActiveIndex(current => (current + 1) % slides.length);
    };

    return (
        <div className="relative w-full h-[400px] my-7 overflow-hidden">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
                        activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            sizes="100vw" 
                            quality={100} 
                        />
                        {/* <div className="absolute inset-0">
                            <div className="flex flex-col items-center justify-center h-[80%] text-white px-4">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                                    {slide.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-center max-w-2xl">
                                    {slide.description}
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            ))}
            
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
                <button 
                    onClick={handlePrevious} 
                    className="bg-white/30 hover:bg-white/50 text-white rounded-full p-3 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    onClick={handleNext} 
                    className="bg-white/30 hover:bg-white/50 text-white rounded-full p-3 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            activeIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}