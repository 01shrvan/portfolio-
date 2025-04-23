"use client";

import { FC, useEffect, useRef, useState } from "react";
import SplitType from 'split-type';
import { animate, stagger, spring } from "motion";

const steps = [
  {
    number: "01",
    title: "discovery",
    description: "deep dive into understanding your vision, brand and goals to lay solid groundwork",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    )
  },
  {
    number: "02",
    title: "design + planning",
    description: "rough sketches → wireframes → prototypes, iterating until we nail the vibe and flow",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h20"></path>
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
        <path d="m7 21 5-5 5 5"></path>
      </svg>
    )
  },
  {
    number: "03", 
    title: "development",
    description: "build with clean, efficient code following best practices for performance and SEO",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    number: "04",
    title: "deploy + support",
    description: "launch with thorough testing, then provide ongoing support and maintenance as needed",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )
  }
];

const TinyGuide: FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  useEffect(() => {
    // Animate title letters
    if (titleRef.current) {
      const text = new SplitType(titleRef.current, { types: 'chars, words' });
      
      if (text.chars) {
        animate(
          text.chars,
          { 
            opacity: [0, 1],
            y: [50, 0],
            rotateX: [90, 0]
          },
          { 
            delay: stagger(0.03),
            duration: 0.8,
            easing: [0.22, 1, 0.36, 1]
          }
        );
      }
    }
    
    // Animate steps when they come into view
    if (stepsRef.current) {
      const stepItems = stepsRef.current.querySelectorAll('.step-item');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              animate(
                entry.target,
                { 
                  opacity: [0, 1],
                  x: [50, 0]
                },
                { 
                  delay: index * 0.1,
                  duration: 0.8, 
                  easing: spring({ stiffness: 100, damping: 15 })
                }
              );
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      
      stepItems.forEach(el => observer.observe(el));
      
      return () => stepItems.forEach(el => observer.unobserve(el));
    }
  }, []);

  return (
    <section id="guide" className="py-24 md:py-32 lg:py-40 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-red-orange-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-stone-400 blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex items-center gap-3 mb-16">
          <div className="size-3 rounded-full bg-red-orange-500"></div>
          <span className="uppercase text-sm tracking-wide">guided journey</span>
        </div>
        
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl mb-20 font-light"
        >
          tiny guide to our process
        </h2>
        
        <div 
          ref={stepsRef}
          className="grid md:grid-cols-4 gap-6 md:gap-12"
        >
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`step-item opacity-0 group relative p-6 md:p-8 rounded-xl transition-all duration-500 ${
                activeStep === index 
                  ? "bg-stone-800" 
                  : "hover:bg-stone-800/50"
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Accent line */}
              <div className={`absolute top-0 left-0 h-1 bg-red-orange-500 transition-all duration-500 ${
                activeStep === index ? "w-full" : "w-1/4 group-hover:w-1/2"
              }`}></div>
              
              <div className="flex flex-col h-full">
                <div className="mb-6 size-12 rounded-full bg-stone-800 flex items-center justify-center text-red-orange-500 border border-stone-700 group-hover:border-red-orange-500 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <div className="text-sm text-stone-400 mb-2 font-mono">{step.number}</div>
                
                <h3 className="text-2xl mb-4 font-light group-hover:text-red-orange-500 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-stone-400 group-hover:text-stone-300 transition-colors duration-300 font-light">
                  {step.description}
                </p>
                
                <div className={`mt-auto pt-6 opacity-0 transition-opacity duration-300 ${
                  activeStep === index ? "opacity-100" : ""
                }`}>
                  <div className="flex items-center text-red-orange-500 text-sm">
                    Learn more 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TinyGuide;