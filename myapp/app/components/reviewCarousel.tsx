"use client"

import React, { useState, useEffect, useCallback } from 'react';

interface Review {
  id: number;
  text: string;
  author: string;
  position?: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
  autoRotate?: boolean;
  rotateInterval?: number;
}

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({
  reviews,
  autoRotate = true,
  rotateInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  }, [reviews.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  }, [reviews.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoRotate || reviews.length <= 1) return;
    const interval = setInterval(goToNext, rotateInterval);
    return () => clearInterval(interval);
  }, [autoRotate, goToNext, reviews.length, rotateInterval]);

  if (reviews.length === 0) {
    return <div className="max-w-2xl mx-auto text-sm text-center">No reviews available</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col items-center p-4">
      {/* Carousel Content */}
      <div className="w-full flex items-center justify-between mb-4">
        {/* Previous Button */}
        <button
          onClick={goToPrev}
          className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-[#003366] transition-all"
          aria-label="Previous review"
        >
          &lt;
        </button>

        {/* Review Card */}
        <div className="flex-1 bg-white rounded-lg p-4 sm:p-6 mx-3 sm:mx-4 shadow-sm min-h-[180px] sm:min-h-[220px] w-full max-w-[500px] flex flex-col justify-between overflow-y-auto">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 italic">
            &quot;{reviews[currentIndex].text}&quot;
          </p>
          <div>
            <p className="text-sm sm:text-base font-semibold text-gray-800">
              - {reviews[currentIndex].author}
            </p>
            {reviews[currentIndex].position && (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {reviews[currentIndex].position}
              </p>
            )}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="bg-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-[#003366] transition-all"
          aria-label="Next review"
        >
          &gt;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center mt-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 cursor-pointer transition-all duration-400 ${
              index === currentIndex ? 'bg-[#003366] scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;