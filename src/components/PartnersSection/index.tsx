"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Partners = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      {/* Added white line at the top */}

      <div className="container">
        <SectionTitle
          title=""
          paragraph=""
          center
          mb="80px"
        />
        <div style={{ textAlign: 'center', paddingBottom: "50px" }}>
          <span
            style={{
              color: "gold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 25px gold, 0 0 5px darkorange",
              fontFamily: "'Times New Roman', serif",
              letterSpacing: "1px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: "2rem",
            }}
          >
            Our Partners:
          </span>
        </div>
        {/* Central div holding 4 evenly spaced divs */}
        <div className="flex justify-center space-x-8">
          {/* Partner 1 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/cat.jpg"
                alt="Partner 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Partner 1</p>
              <p className="text-sm text-gray-500">Description of Partner 1</p>
            </div>
          </div>

          {/* Partner 2 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/dog.jpg"
                alt="Partner 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Partner 2</p>
              <p className="text-sm text-gray-500">Description of Partner 2</p>
            </div>
          </div>

          {/* Partner 3 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/fox.jpg"
                alt="Partner 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Partner 3</p>
              <p className="text-sm text-gray-500">Description of Partner 3</p>
            </div>
          </div>

          {/* Partner 4 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/images/dogs.jpg"
                alt="Partner 4"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold text-lg">Partner 4</p>
              <p className="text-sm text-gray-500">Description of Partner 4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;