"use client";

import React from "react";
import Image from "next/image"; // Import the Image component

import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-blue1"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="heading mb-12">
            Technologies <span className="text-blue1">I work with</span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            <div className="flex items-center justify-center">
              <Image
                src="/react-logo.png" // Direct path from public directory
                alt="React"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/next-logo.png" // Direct path from public directory
                alt="Next.js"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/mongodb-logo.png" // Direct path from public directory
                alt="MongoDB"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/java-logo.png" // Direct path from public directory
                alt="Java"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/c-logo.png" // Direct path from public directory
                alt="C"
                width={80} // Adjust width as needed
                height={80} // Adjust height as needed
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
