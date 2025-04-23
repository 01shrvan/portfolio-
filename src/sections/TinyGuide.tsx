"use client";

import { FC, useRef, useEffect } from "react";
import SplitType from 'split-type';
import { stagger, animate } from "motion";

const steps = [
  {
    number: "01",
    title: "discovery",
    description: "deep dive into understanding your vision, brand and goals to lay solid groundwork"
  },
  {
    number: "02",
    title: "design + planning",
    description: "rough sketches → wireframes → prototypes, iterating until we nail the vibe and flow"
  },
  {
    number: "03",
    title: "development",
    description: "build with clean, efficient code following best practices for performance and SEO"
  },
  {
    number: "04",
    title: "deploy + support",
    description: "launch with thorough testing, then provide ongoing support and maintenance as needed"
  }
];

const TinyGuide: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'words' });

      if (text.words) {
        animate(
          text.words,
          {
            opacity: [0, 1],
            y: [20, 0],
          },
          {
            delay: stagger(0.05),
            duration: 0.5,
            easing: [0.25, 0.1, 0.25, 1]
          }
        );
      }
    }

    if (stepsRef.current) {
      const stepItems = stepsRef.current.querySelectorAll('.step-item');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(
                entry.target,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 0.6, easing: [0.25, 0.1, 0.25, 1] }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      stepItems.forEach((el) => observer.observe(el));

      return () => stepItems.forEach((el) => observer.unobserve(el));
    }
  }, []);

  return (
    <section id="guide" className="py-24 md:py-32 lg:py-40 bg-stone-900 text-stone-100">
      <div className="container">
        <div className="flex items-center gap-3 mb-16">
          <div className="size-3 rounded-full bg-red-orange-500"></div>
          <span className="uppercase text-sm tracking-wide">tiny guide</span>
        </div>

        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl mb-16 font-light"
        >
          how we'll go from zero to launch day
        </h2>

        <div ref={stepsRef} className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item opacity-0 border-t border-stone-700 pt-6 hover:border-red-orange-500 transition-colors duration-300">
              <div className="text-sm text-stone-400 mb-2 font-mono">{step.number}</div>
              <h3 className="text-2xl md:text-3xl mb-3 font-light">{step.title}</h3>
              <p className="text-stone-300 font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TinyGuide;