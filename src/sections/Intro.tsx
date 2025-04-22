import { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="py-24 md:py-32 mt-12 lg:py-40 lg:mt-20 md:mt-16">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%]">
          solo dev buildin responsive{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-dashed underline underline-offset-4 decoration-gray-400"
          >
            nextjs
          </a>{" "}
          x{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="decoration-dashed underline underline-offset-4 decoration-gray-400"
          >
            tailwind
          </a>{" "}
          web things — landings, dashboards, vibes n all
        </h2>

      </div>
    </section>
  );
};

export default Intro;