"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, spring } from "motion";

const frames = [
  {
    id: 1,
    src: "/api/placeholder/800/1200",
    alt: "Creative workspace setup",
    colSpan: "md:col-span-6 lg:col-span-5",
    aspectRatio: "aspect-[2/3]"
  },
  {
    id: 2,
    src: "/api/placeholder/1200/800",
    alt: "Design brainstorming session",
    colSpan: "md:col-span-6 lg:col-span-7",
    aspectRatio: "aspect-[3/2]"
  },
  {
    id: 3,
    src: "/api/placeholder/900/1200",
    alt: "Notebook sketches for project",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: 4,
    src: "/api/placeholder/1200/900",
    alt: "Team collaboration moment",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: 5,
    src: "/api/placeholder/800/800",
    alt: "Design inspiration wall",
    colSpan: "md:col-span-4",
    aspectRatio: "aspect-square"
  }
];

const IRLFrames: FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      animate(
        titleRef.current,
        {
          opacity: [0, 1],
          clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
        },
        { duration: 1, easing: spring() }
      );
    }

    if (gridRef.current) {
      const frameItems = gridRef.current.querySelectorAll('.frame-item');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                entry.target,
                {
                  opacity: [0, 1],
                  scale: [0.9, 1],
                  y: [30, 0]
                },
                {
                  duration: 0.7,
                  delay: Math.random() * 0.3,
                  easing: [0.22, 1, 0.36, 1]
                }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      frameItems.forEach(item => observer.observe(item));

      return () => frameItems.forEach(item => observer.unobserve(item));
    }
  }, []);

  return (
    <section id="frames" className="py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-3 rounded-full bg-red-orange-500"></div>
              <span className="uppercase text-sm tracking-wide font-medium">captured moments</span>
            </div>

            <h2
              ref={titleRef}
              className="text-4xl md:text-6xl lg:text-7xl font-light opacity-0"
            >
              irl frames
            </h2>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
        >
          {frames.map((frame) => (
            <div
              key={frame.id}
              className={`frame-item opacity-0 ${frame.colSpan} ${frame.aspectRatio} overflow-hidden rounded-xl relative group cursor-pointer`}
              onMouseEnter={() => setHoveredId(frame.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                width={1200}
                height={1200}
                className={`w-full h-full object-cover transition-all duration-700 ${hoveredId !== null && hoveredId !== frame.id
                    ? "scale-95 opacity-50"
                    : "scale-100 opacity-100"
                  } ${hoveredId === frame.id ? "scale-105" : ""
                  }`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <span className="text-white text-lg font-light">{frame.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IRLFrames;
