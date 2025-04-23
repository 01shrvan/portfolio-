"use client";

import { FC, useState } from "react";

const works = [
  {
    name: "dreamskrin",
    link: "https://dreamskrin.com",
    title: "full stack dev"
  },
  {
    name: "align network",
    link: "https://getalign.01shrvan.tech/",
    title: "cool shit in progress (maybe)"
  },
  {
    name: "journally",
    link: "https://journally01.vercel.app",
    title: "a safe space in sans-serif"
  },
  {
    name: "wandr",
    link: "https://wandr-eight.vercel.app",
    title: "leave footprints ✦ not cookies | dev in progress"
  }
];

const Works: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">works</h2>
        <div className="mt-10 md:mt-16 border-b border-dashed border-stone-400 lg:-mt20">
          {works.map(({ name, title, link }, index) => (
            <a
              href={link}
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              className={`border-t border-dashed border-stone-400 py-6 md:py-8 lg:py-10 flex flex-col transition-all duration-300 ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-50 blur-[1px]" : ""
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div>
                <h3 className="text-2xl font-semibold md:text-3xl lg:text-4xl">{name}</h3>
                <div className="mt-1 md:mt-0 flex justify-between items-center h-6">
                  <div className="text-lg text-gray-400">{title}</div>
                  <div className="flex items-center justify-center h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-gray-400 hover:text-gray-600 transition-colors duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;