"use client";

import Button from "@/components/Button";
import { FC } from "react";

const navItems = [
  { href: "/", label: "home" },
  { href: "/", label: "works" },
  { href: "/", label: "guide" },
  { href: "/", label: "frames" },
  { href: "/", label: "contact" },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-green-400"></div>
          <span className="uppercase text-sm tracking-wide">next project? could be yours</span>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-4xl sm:text-4xl md:text-7xl font-extralight leading-tight">
              let’s build smth that actually hits
            </h2>
            <a href="mailto:benkeshrvan@gmail.com" className="w-max block">
              <Button variant="secondary" className="inline-flex items-center gap-2 text-base">
                <span className="inline-flex items-center gap-2">
                  benkeshrvan@gmail.com
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-4 w-4 -mt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25"
                    />
                  </svg>
                </span>
              </Button>
            </a>
          </div>
          <nav className="flex flex-col gap-4 md:items-end mt-14 md:mt-0">
            {navItems.map(({ href, label }) => (
              <a href={href} key={label}>
                <Button variant="text" className="text-lg">
                  {label}
                </Button>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
