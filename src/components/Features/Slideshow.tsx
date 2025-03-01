'use client'; // Add this line at the very top to mark it as a Client Component

import React, { useState, useEffect } from "react";
import Image from "next/image"; // Import Image from next/image

// Sample image data for the slideshow
const images = [
  "/images/16days.jpg",
  "/images/16days.jpg",
  "/images/16days.jpg",
  "/images/16days.jpg",
  "/images/16days.jpg",
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

  // Autoplay functionality
  useEffect(() => {
    const autoplay = setInterval(nextSlide, 10000); // Change slide every 10 seconds (10000ms)
    return () => clearInterval(autoplay); // Cleanup on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Image Container with fixed size and proper centering */}
      <div className="relative w-full flex justify-center items-center">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={500} // Set width to 1000px
          height={800} // Set height based on the aspect ratio of the image
          objectFit="contain" // Ensures the image fits within the container without being cropped
          className="mx-auto" // Centers the image horizontally
        />
      </div>

      {/* Navigation buttons */}
      <div
        className="absolute left-[20%] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl px-4"
        onClick={prevSlide}
      >
        ←
      </div>
      <div
        className="absolute right-[20%] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white text-2xl px-4"
        onClick={nextSlide}
      >
        →
      </div>
    </div>
  );
};

export default Slideshow;