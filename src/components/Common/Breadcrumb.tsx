import Link from "next/link";
import React from "react";

const Breadcrumb = ({
  pageName,
  description,
  style,  // Add style prop
}: {
  pageName: string;
  description: React.ReactNode;
  style?: React.CSSProperties; // Make style optional
}) => {
  return (
    <>
      <section
        className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] bg-gradient-to-r from-purple-600 to-blue-500 animate-gradient"
        style={style} // Apply the style here
      >
        {/* Breadcrumb container */}
        <div className="w-full text-center px-4">
          <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            {pageName}
          </h1>
          <div className="text-base font-medium leading-relaxed text-body-color">
            {description}
          </div>
          <ul className="flex justify-center mt-4">
            <li className="flex items-center">
              <Link
                href="/"
                className="pr-1 text-base font-medium text-body-color hover:text-primary"
              >
                Home
              </Link>
              <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
            </li>
            <li className="text-base font-medium text-primary">{pageName}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;