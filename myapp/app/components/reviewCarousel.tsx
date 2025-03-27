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

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };


  useEffect(() => {
    if (!autoRotate || reviews.length <= 1) return;
    const interval = setInterval(goToNext, rotateInterval);
    return () => clearInterval(interval);
  }, [autoRotate, goToNext, reviews.length, rotateInterval]); 


  if (reviews.length === 0) return <div className="max-w-2xl mx-auto text-sm text-center">No reviews available</div>;

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center p-4">
  
      <div className="w-full flex items-center justify-between mb-4">
     
        <button
          onClick={goToPrev}
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer text-gray-600 hover:bg-gray-100 transition-all"
          aria-label="Previous review"
        >
          &lt;
        </button>

   
        <div className="flex-1 bg-white rounded-lg p-6 mx-4 shadow-sm min-h-[220px] max-h-[220px] w-[500px] flex flex-col justify-between overflow-y-auto">
          <p className="text-base text-gray-700 leading-relaxed mb-3 italic">
            &quot;{reviews[currentIndex].text}&quot;
          </p>
          <div>
            <p className="text-sm font-semibold text-gray-800">
              - {reviews[currentIndex].author}
            </p>
            {reviews[currentIndex].position && (
              <p className="text-xs text-gray-600">
                {reviews[currentIndex].position}
              </p>
            )}
          </div>
        </div>

     
        <button
          onClick={goToNext}
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm cursor-pointer text-gray-600 hover:bg-gray-100 transition-all"
          aria-label="Next review"
        >
          &gt;
        </button>
      </div>

    
      <div className="flex justify-center mt-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-colors duration-200 ${
              index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;