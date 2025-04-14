"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/Carousel/webinar.jpg",
      title: "Webinar",
      description: "Banner for the webinar",
    },
    {
      id: 2,
      image: "/Carousel/C1.png",
      title: "Cyber Security Solutions",
      description: "Protecting your digital assets with cutting-edge security measures",
    },
    {
      id: 3,
      image: "/Carousel/C2.png",
      title: "Advanced Threat Protection",
      description: "Stay ahead of cyber threats with our proactive security approach",
    },
    {
      id: 4,
      image: "/Carousel/C3.png",
      title: "Enterprise Security",
      description: "Comprehensive security solutions for businesses of all sizes",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[350px] lg:h-[400px] my-4 sm:my-6 overflow-hidden group rounded-2xl shadow-md">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
            activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              quality={100}
            />

            {/* Optional: Enable text overlay below if needed */}
            {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center px-4 max-w-4xl">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/90">
                  {slide.description}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute left-2 right-2 sm:left-4 sm:right-4 top-1/2 flex -translate-y-1/2 justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button
          onClick={handlePrevious}
          className="bg-white/30 hover:bg-white/50 text-white rounded-full p-2 sm:p-3 transition"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-white/30 hover:bg-white/50 text-white rounded-full p-2 sm:p-3 transition"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              activeIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
