'use client'; // Add this line at the very top to mark it as a Client Component

import React, { useState } from "react";

// Sample image data for the slideshow and associated text
const images = [
  { src: "/images/cat.jpg", text: "Person #1 Info..." },
  { src: "/images/cat.jpg", text: "Person #2 Info..." },
  { src: "/images/cat.jpg", text: "Person #3 Info..." },
  { src: "/images/cat.jpg", text: "Person #4 Info..." },
  { src: "/images/cat.jpg", text: "Person #5 Info..." },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex justify-center items-center h-screen"> {/* Flexbox to center the content */}
      <div className="slideshow-container relative w-full max-w-md mx-auto border-4 border-gray-200 rounded-lg overflow-hidden">
        <div className="relative w-full h-auto">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-auto object-cover" // Remove fixed height, let the image adjust the size
          />
        </div>

        {/* Text below the image */}
        <div className="absolute bottom-0 left-0 w-full bg-black text-white p-4">
          <p>{images[currentIndex].text}</p>
        </div>

        {/* Navigation buttons */}
        <div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
          onClick={prevSlide}
        >
          ←
        </div>
        <div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
          onClick={nextSlide}
        >
          →
        </div>
      </div>
    </div>
  );
};

export default Slideshow;