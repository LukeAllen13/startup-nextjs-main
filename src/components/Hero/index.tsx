'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

// Helper function to generate random letters and positions
const generateRandomCoordinates = (totalLetters, width, height) => {
  const coordinates = [];
  const letters = ["T", "G", "F", "M"];
  const colors = [
    "red", "blue", "green", "purple", "orange", "yellow", 
    "pink", "brown", "cyan", "lime", "teal", "violet", 
    "magenta", "crimson", "gold", "indigo", "silver", "navy"
  ];

  for (let i = 0; i < totalLetters; i++) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    coordinates.push({
      x: randomX,
      y: randomY,
      letter: randomLetter,
      color: randomColor
    });
  }
  return coordinates;
};

const Hero = () => {
  const totalLetters = 500; // Total number of letters to display
  const [width, setWidth] = useState(1200); // Set initial width (default value)
  const [coordinates, setCoordinates] = useState([]); // State to store random letters and positions
  const height = 800; // Height of the section

  useEffect(() => {
    // Only runs on the client-side, after the component has mounted
    setWidth(window.innerWidth);
    
    // Generate random positions and letter/color combinations after client render
    const randomCoordinates = generateRandomCoordinates(totalLetters, window.innerWidth, height);
    setCoordinates(randomCoordinates);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{ width: "100vw" }} // Ensure section spans full viewport width
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  The Goodmen Foundation
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            viewBox={`0 0 ${width} 800`} // Dynamic viewBox based on window width
            width="100vw" // Full width of viewport
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Render the randomly positioned letters */}
            {coordinates.map((coord, index) => (
              <text
                key={index}
                x={coord.x}
                y={coord.y}
                fontSize="40" // You can adjust font size
                fill={coord.color}
                fontWeight="bold"
                opacity="0.1" // You can adjust opacity for a subtler effect
              >
                {coord.letter}
              </text>
            ))}
          </svg>
        </div>
        {/* White to Grey Fading Design Bar */}
      </section>
    </>
  );
};

export default Hero;